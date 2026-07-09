const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  for (const [from, to] of replacements) {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated ' + filePath);
  }
}

function processDirectory(dir, replacements) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        processDirectory(fullPath, replacements);
      }
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      replaceInFile(fullPath, replacements);
    }
  }
}

const globalReplacements = [
  ['تسامي', 'مدار'],
  ['Tasami', 'Madar'],
  ['tasami-locale', 'madar-locale'],
  ['hello@madar.com', 'mustafaradyialy@gmail.com'],
  ['hello@tasami.com', 'mustafaradyialy@gmail.com'],
  ["© {new Date().getFullYear()} {SITE.name}", "© {new Date().getFullYear()} {SITE.name}\n            <span className=\"hidden w-1 h-1 rounded-full bg-white/20 md:block\" />\n            <span className=\"text-[#B8976A]/80 font-medium\">\n              {locale === 'ar' ? 'إدارة مصطفى راضي' : 'Managed by Mustafa Rady'}\n            </span>"]
];

processDirectory(__dirname, globalReplacements);

// Also fix layout lang
const layoutPath = path.join(__dirname, 'app', 'layout.tsx');
let layout = fs.readFileSync(layoutPath, 'utf-8');
layout = layout.replace('<html lang="en"', '<html lang="ar" dir="rtl"');
// add WhatsAppWidget to layout
if (!layout.includes('WhatsAppWidget')) {
  layout = layout.replace("import { Footer } from '@/components/Footer';", "import { Footer } from '@/components/Footer';\nimport { WhatsAppWidget } from '@/components/WhatsAppWidget';");
  layout = layout.replace("<Footer />", "<Footer />\n        <WhatsAppWidget />");
}
fs.writeFileSync(layoutPath, layout, 'utf-8');

// Fix LocaleProvider default
const localeProviderPath = path.join(__dirname, 'lib', 'i18n', 'LocaleProvider.tsx');
let localeProvider = fs.readFileSync(localeProviderPath, 'utf-8');
localeProvider = localeProvider.replace("const [locale, setLocaleState] = useState<Locale>('en');", "const [locale, setLocaleState] = useState<Locale>('ar');");
localeProvider = localeProvider.replace("if (typeof window === 'undefined') return 'en';", "if (typeof window === 'undefined') return 'ar';");
localeProvider = localeProvider.replace("return navigator.language.startsWith('ar') ? 'ar' : 'en';", "// Default to Arabic unless browser is strictly English\n  return navigator.language.startsWith('en') ? 'en' : 'ar';");
fs.writeFileSync(localeProviderPath, localeProvider, 'utf-8');

// Fix Footer locale import
const footerPath = path.join(__dirname, 'components', 'Footer.tsx');
let footer = fs.readFileSync(footerPath, 'utf-8');
if (!footer.includes('const { locale } = useLocale();')) {
  footer = footer.replace("import { useTranslations }", "import { useLocale, useTranslations }");
  footer = footer.replace("export function Footer() {", "export function Footer() {\n  const { locale } = useLocale();");
}
fs.writeFileSync(footerPath, footer, 'utf-8');
console.log("Done.");
