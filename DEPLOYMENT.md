# تعليمات النشر على GitHub Pages

## المشاكل التي تم إصلاحها

1. ✅ **مسار الأيقونة**: تم إصلاح مسار الأيقونة في `index.html` (تمت إزالة `/public`)
2. ✅ **إعدادات Base Path**: تم إضافة دعم لـ base path في `vite.config.ts` و `App.tsx`
3. ✅ **GitHub Actions Workflow**: تم إنشاء workflow تلقائي للنشر

## خطوات النشر

### الطريقة الأولى: استخدام GitHub Actions (موصى بها)

1. **تفعيل GitHub Pages**:
   - اذهب إلى إعدادات المستودع (Repository Settings)
   - اختر "Pages" من القائمة الجانبية
   - في "Source"، اختر "GitHub Actions"

2. **تحديد Base Path**:
   - إذا كان المستودع اسمه `my-portfolio` والرابط هو `username.github.io/my-portfolio`:
     - افتح ملف `.github/workflows/deploy.yml`
     - تأكد من أن `VITE_BASE_PATH` مضبوط على `/${{ github.event.repository.name }}/`
   - إذا كان المستودع اسمه `username.github.io` (root):
     - غيّر `VITE_BASE_PATH` إلى `/`

3. **رفع التغييرات**:
   ```bash
   git add .
   git commit -m "Fix deployment issues"
   git push
   ```

4. **التحقق من النشر**:
   - اذهب إلى تبويب "Actions" في المستودع
   - انتظر حتى يكتمل workflow النشر
   - افتح الرابط من إعدادات Pages

### الطريقة الثانية: النشر اليدوي

1. **بناء المشروع**:
   ```bash
   cd my-portfolio
   npm install
   npm run build
   ```

2. **تحديد Base Path**:
   - أنشئ ملف `.env` في مجلد `my-portfolio`:
     ```
     VITE_BASE_PATH=/repository-name/
     ```
   - استبدل `repository-name` باسم المستودع الفعلي
   - إذا كان المستودع root (`username.github.io`)، استخدم `/`

3. **إعادة البناء**:
   ```bash
   npm run build
   ```

4. **رفع مجلد dist**:
   - اذهب إلى إعدادات المستودع > Pages
   - اختر "Deploy from a branch"
   - اختر الفرع (main/master) والمجلد `dist`

## ملاحظات مهمة

- **Base Path**: يجب أن يتطابق base path في `vite.config.ts` مع المسار الفعلي للمستودع
- **404.html**: تم إنشاء ملف `404.html` لدعم توجيه SPA (Single Page Application)
- **الأيقونات**: تأكد من أن جميع الملفات في مجلد `public` موجودة

## استكشاف الأخطاء

إذا كانت الصفحة لا تزال بيضاء:

1. **افتح Developer Console** (F12) وتحقق من الأخطاء
2. **تحقق من Base Path**: تأكد من أن `VITE_BASE_PATH` صحيح
3. **تحقق من الملفات**: تأكد من أن جميع الملفات في `dist` موجودة بعد البناء
4. **تحقق من Network Tab**: تأكد من أن جميع الموارد (JS, CSS, images) يتم تحميلها بشكل صحيح

## الدعم

إذا استمرت المشكلة، تحقق من:
- Console errors في المتصفح
- Network tab في Developer Tools
- GitHub Actions logs في تبويب Actions

