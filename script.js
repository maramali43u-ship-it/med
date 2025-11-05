// بيانات الأدوية (3 أدوية لكل نوع)
const allDrugs = {
    // الأدوية المسكنة
    'مسكنة': [
        {
            id: 'unadol', 
            name: 'يونادول',
            composition: 'باراسيتامول', 
            caliber: '500 ملغ', 
            form: 'مضغوطات',
            indication: 'مسكن ألم - خافض حرارة', 
            dosage: '1 غرام - ٤ مرات باليوم', 
            usage: '3 مرات يومياً بعد الطعام',
            price: '8500 ليرة سورية', 
            oldName: '', 
            summary: 'دواء فعال لتخفيف الآلام وخفض الحرارة', 
            notes: 'يجب عدم تجاوز الجرعة الموصى بها. يفضل تناوله مع الطعام لتجنب تهيج المعدة.',
            image: 'https://picsum.photos/seed/unadol/300/300.jpg'
        },
        {
            id: 'unadol_extra', 
            name: 'يونادول إكسترا (أحمر)',
            composition: 'باراسيتامول 500 ملغ وكافيين 65 ملغ', 
            caliber: '', 
            form: 'مضغوطة مُلبسة بالفيلم',
            indication: 'مسكن ألم وخافض حرارة', 
            dosage: 'مضغوطة مرتين/ثلاث مرات يومياً بعد الأكل', 
            usage: 'بعد الأكل مع كوب من الماء',
            price: '10500 ليرة سورية', 
            oldName: 'unadol extra', 
            summary: 'أقوى من يونادول العادي لاحتوائه على الكافيين', 
            notes: 'أقوى من الأزرق لاحتوائه على كافيين فيعزز تأثير المسكن. ممكن أن يُعطى للحامل بوصفة طبيب. لا يُعطى لمريض ضغط ولا للأطفال تحت 12 سنة.',
            image: 'https://picsum.photos/seed/unadol_extra/300/300.jpg'
        },
        {
            id: 'unadol_night', 
            name: 'يونادول نايت (بنفسجي)',
            composition: 'باراسيتامول 500 ملغ، ديفينهدرامين 25 ملغ', 
            caliber: '', 
            form: 'مضغوطة مُلبسة بالفيلم',
            indication: 'يستعمل لتسكين الألم ويساعد عالنوم', 
            dosage: 'مضغوطتان قبل النوم بـ 20 دقيقة', 
            usage: 'قبل النوم مباشرة',
            price: '10500 ليرة سورية', 
            oldName: 'unadol night', 
            summary: 'مسكن ألم مع مادة تساعد على النوم', 
            notes: 'يحتوي على مادة مهدئة، يجب استخدامه قبل النوم فقط. قد يسبب النعاس، تجنب القيادة بعد تناوله.',
            image: 'https://picsum.photos/seed/unadol_night/300/300.jpg'
        }
    ],
    // الأدوية الهضمية
    'هضمية': [
        {
            id: 'omeprazole', 
            name: 'أوميبرازول',
            composition: 'أوميبرازول', 
            caliber: '20 ملغ', 
            form: 'كبسولات',
            indication: 'علاج القرحة والارتجاع المريئي', 
            dosage: 'كبسولة واحدة قبل الفطور', 
            usage: 'قبل الأكل بساعة على الأقل',
            price: '12000 ليرة سورية', 
            oldName: '', 
            summary: 'يقلل من إنتاج حمض المعدة', 
            notes: 'يجب استشارة الطبيب قبل الاستخدام طويل الأمد. قد يسبب نقص فيتامين B12 مع الاستخدام المطول.',
            image: 'https://picsum.photos/seed/omeprazole/300/300.jpg'
        },
        {
            id: 'pantoprazole', 
            name: 'بانتوبرازول',
            composition: 'بانتوبرازول', 
            caliber: '40 ملغ', 
            form: 'أقراص',
            indication: 'علاج التهاب المعدة والارتجاع', 
            dosage: 'قرص واحد يومياً قبل الأكل', 
            usage: 'قبل الأكل بساعة',
            price: '15000 ليرة سورية', 
            oldName: '', 
            summary: 'يقلل من إنتاج حمض المعدة', 
            notes: 'فعال في علاج القرحة المعدية والاثني عشرية. يجب بلع القرص كاملاً دون مضغ.',
            image: 'https://picsum.photos/seed/pantoprazole/300/300.jpg'
        },
        {
            id: 'domperidone', 
            name: 'دومبيريدون',
            composition: 'دومبيريدون', 
            caliber: '10 ملغ', 
            form: 'أقراص',
            indication: 'علاج الغثيان والقيء', 
            dosage: 'قرص واحد 3 مرات يومياً قبل الأكل', 
            usage: 'قبل الأكل بنصف ساعة',
            price: '8000 ليرة سورية', 
            oldName: '', 
            summary: 'يساعد على تنظيم حركة المعدة', 
            notes: 'يحسن من عملية الهضم ويقلل من الشعور بالغثيان. يجب استخدامه بحذر لدى كبار السن.',
            image: 'https://picsum.photos/seed/domperidone/300/300.jpg'
        }
    ],
    // الأدوية الجلدية
    'جلدية': [
        {
            id: 'betamethasone', 
            name: 'بيتاميثازون',
            composition: 'بيتاميثازون فاليرات', 
            caliber: '0.1%', 
            form: 'كريم',
            indication: 'علاج الالتهابات الجلدية والأكزيما', 
            dosage: 'دهن طبقة رقيقة على المنطقة المصابة', 
            usage: 'مرة واحدة إلى مرتين يومياً',
            price: '9000 ليرة سورية', 
            oldName: '', 
            summary: 'كورتيكوستيرويد قوي لعلاج الالتهابات الجلدية', 
            notes: 'لا يستخدم على الوجه لفترات طويلة. قد يسبب ترقق الجلد مع الاستخدام المطول.',
            image: 'https://picsum.photos/seed/betamethasone/300/300.jpg'
        },
        {
            id: 'clotrimazole', 
            name: 'كلوتريمازول',
            composition: 'كلوتريمازول', 
            caliber: '1%', 
            form: 'كريم',
            indication: 'علاج الفطريات الجلدية', 
            dosage: 'دهن طبقة رقيقة على المنطقة المصابة', 
            usage: 'مرتين يومياً',
            price: '7000 ليرة سورية', 
            oldName: '', 
            summary: 'علاج فعال للعدوى الفطرية الجلدية', 
            notes: 'يستمر العلاج حتى أسبوع بعد اختفاء الأعراض. تجنب ملامسة العينين.',
            image: 'https://picsum.photos/seed/clotrimazole/300/300.jpg'
        },
        {
            id: 'mupirocin', 
            name: 'موبيروسين',
            composition: 'موبيروسين', 
            caliber: '2%', 
            form: 'مرهم',
            indication: 'علاج الالتهابات البكتيرية الجلدية', 
            dosage: 'دهن طبقة رقيقة على المنطقة المصابة', 
            usage: '3 مرات يومياً',
            price: '11000 ليرة سورية', 
            oldName: '', 
            summary: 'مضاد حيوي موضعي لعلاج الالتهابات البكتيرية', 
            notes: 'يستخدم لعلاج الجروح المصابة والتهابات الجلد. يجب تغطية المنطقة بعد الاستخدام.',
            image: 'https://picsum.photos/seed/mupirocin/300/300.jpg'
        }
    ]
};

// -------------------- المتغيرات العامة --------------------
let currentDrugType = '';
let currentDrug = null;
let userName = 'زائر';
let imageRotation = 0;
let isImageZoomed = false;
let favoriteDrugs = JSON.parse(localStorage.getItem('favoriteDrugs')) || [];

// -------------------- وظائف التنقل بين الصفحات --------------------
function goToPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(`page${pageNum}`).classList.add('active');
    
    // تحديث الشريط الجانبي
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    navItems.forEach(item => {
        if (item.getAttribute('data-page') == pageNum) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // إغلاق النافذة المنبثقة
    closeModal();
    
    // إغلاق الشريط الجانبي على الشاشات الصغيرة
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
    
    // تشغيل AOS في الصفحة الجديدة
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    // إخفاء زر العودة للأعلى
    document.getElementById('scroll-to-top').classList.remove('visible');
}

// -------------------- الوضع النهاري/الليلي --------------------
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // تغيير أيقونة الزر
    const themeBtn = document.getElementById('theme-toggle-nav');
    const isDarkMode = body.classList.contains('dark-mode');
    themeBtn.querySelector('i').className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    themeBtn.querySelector('span').textContent = isDarkMode ? 'الوضع النهاري' : 'الوضع الليلي';
    
    // حفظ التفضيل في التخزين المحلي
    localStorage.setItem('darkMode', isDarkMode);
}

// -------------------- وظائف قائمة الأدوية --------------------
function loadDrugList(drugType) {
    const listContainer = document.getElementById('drug-list');
    const typeNameDisplay = document.getElementById('drug-type-name');
    const drugs = allDrugs[drugType] || [];
    
    // حفظ نوع الدواء الحالي
    currentDrugType = drugType;
    
    // تحديث عنوان الصفحة
    typeNameDisplay.textContent = drugType;
    
    // تفريغ القائمة الحالية
    listContainer.innerHTML = '';
    
    // بناء بطاقات الأدوية
    drugs.forEach((drug, index) => {
        const button = document.createElement('button');
        button.className = 'drug-card';
        button.setAttribute('data-id', drug.id);
        button.setAttribute('data-type', drugType);
        button.innerHTML = `
            <span class="card-number">${index + 1}.</span>
            <span>${drug.name}</span>
        `;
        button.addEventListener('click', () => showDrugDetails(drug));
        listContainer.appendChild(button);
    });
    
    // الانتقال إلى الصفحة الثالثة
    goToPage(3);
}

// -------------------- وظيفة البحث --------------------
function filterDrugs(searchTerm) {
    const drugs = allDrugs[currentDrugType] || [];
    const listContainer = document.getElementById('drug-list');
    
    // تفريغ القائمة الحالية
    listContainer.innerHTML = '';
    
    // فلترة الأدوية
    const filteredDrugs = drugs.filter(drug => 
        drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.indication.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // بناء بطاقات الأدوية المفلترة
    if (filteredDrugs.length === 0) {
        listContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">لا توجد نتائج للبحث</p>';
    } else {
        filteredDrugs.forEach((drug, index) => {
            const button = document.createElement('button');
            button.className = 'drug-card';
            button.setAttribute('data-id', drug.id);
            button.setAttribute('data-type', currentDrugType);
            button.innerHTML = `
                <span class="card-number">${index + 1}.</span>
                <span>${drug.name}</span>
            `;
            button.addEventListener('click', () => showDrugDetails(drug));
            listContainer.appendChild(button);
        });
    }
}

// -------------------- وظائف النافذة المنبثقة (Modal) --------------------
function showDrugDetails(drug) {
    currentDrug = drug;
    
    // ملء البيانات في النافذة المنبثقة
    document.getElementById('modal-drug-name').textContent = drug.name || '---';
    document.getElementById('modal-composition').textContent = drug.composition || '---';
    document.getElementById('modal-form').textContent = drug.form || '---';
    
    // استخلاص آلية التأثير من الملاحظات إذا كانت موجودة
    let mechanism = '---';
    if (drug.notes && drug.notes.includes('آلية التأثير')) {
        mechanism = drug.notes.split('آلية التأثير:')[1].split('.')[0].trim();
    }
    document.getElementById('modal-mechanism').textContent = mechanism;
    
    document.getElementById('modal-indication').textContent = drug.indication || '---';
    document.getElementById('modal-dosage').textContent = drug.dosage || '---';
    document.getElementById('modal-caliber').textContent = drug.caliber || '---';
    document.getElementById('modal-notes').textContent = drug.notes || '---';
    document.getElementById('modal-usage').textContent = drug.usage || '---';
    document.getElementById('modal-summary').textContent = drug.summary || '---';
    document.getElementById('modal-price').textContent = drug.price || '---';
    document.getElementById('modal-old-name').textContent = drug.oldName ? `الاسم القديم/التجاري: ${drug.oldName}` : '';
    
    // تحميل الصورة
    const imgElement = document.getElementById('modal-drug-image');
    imgElement.src = drug.image || 'https://picsum.photos/seed/placeholder/300/300.jpg';
    imgElement.alt = `صورة علبة ${drug.name}`;
    
    // إعادة تعيين دوران وتكبير الصورة
    imageRotation = 0;
    isImageZoomed = false;
    imgElement.style.transform = `rotate(0deg) scale(1)`;
    
    // تحديث زر المفضلة
    const favoriteBtn = document.getElementById('favorite-btn');
    if (favoriteDrugs.includes(drug.id)) {
        favoriteBtn.classList.add('active');
        favoriteBtn.querySelector('i').className = 'fas fa-heart';
    } else {
        favoriteBtn.classList.remove('active');
        favoriteBtn.querySelector('i').className = 'far fa-heart';
    }
    
    // إعادة تعيين التبويبات
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector('.tab-btn[data-tab="basic"]').classList.add('active');
    document.getElementById('basic-tab').classList.add('active');
    
    // فتح النافذة المنبثقة
    document.getElementById('details-modal').classList.add('open');
}

function closeModal() {
    document.getElementById('details-modal').classList.remove('open');
}

// -------------------- وظائف التبويبات --------------------
function switchTab(tabName) {
    // إزالة الكلاس النشط من جميع التبويبات
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // إضافة الكلاس النشط للتبويب المحدد
    document.querySelector(`.tab-btn[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// -------------------- وظائف الطباعة --------------------
function printDrugCard() {
    if (!currentDrug) return;
    
    // إنشاء نافذة جديدة للطباعة
    const printWindow = window.open('', '_blank');
    
    // بناء محتوى HTML للطباعة
    const printContent = `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <title>بطاقة دواء: ${currentDrug.name}</title>
            <style>
                body {
                    font-family: 'Tajawal', sans-serif;
                    direction: rtl;
                    padding: 20px;
                    line-height: 1.6;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #6a4c93;
                    padding-bottom: 15px;
                }
                .drug-name {
                    font-size: 24px;
                    font-weight: bold;
                    color: #6a4c93;
                    margin-bottom: 5px;
                }
                .drug-image {
                    max-width: 200px;
                    max-height: 200px;
                    display: block;
                    margin: 0 auto 20px;
                    border-radius: 8px;
                }
                .details-section {
                    margin-bottom: 20px;
                }
                .section-title {
                    font-size: 18px;
                    font-weight: bold;
                    color: #6a4c93;
                    margin-bottom: 10px;
                    border-bottom: 1px solid #eee;
                    padding-bottom: 5px;
                }
                .detail-row {
                    display: flex;
                    margin-bottom: 8px;
                }
                .detail-label {
                    font-weight: bold;
                    width: 120px;
                    color: #333;
                }
                .detail-value {
                    flex: 1;
                    color: #555;
                }
                .price-tag {
                    background-color: #ff6b6b;
                    color: white;
                    padding: 10px;
                    border-radius: 8px;
                    text-align: center;
                    font-weight: bold;
                    margin: 20px 0;
                }
                .footer {
                    margin-top: 30px;
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                    border-top: 1px solid #ddd;
                    padding-top: 15px;
                }
                @media print {
                    body {
                        padding: 10px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="drug-name">${currentDrug.name}</div>
                <div>موقع معلومات الأدوية - حمص</div>
            </div>
            
            <img src="${currentDrug.image}" alt="${currentDrug.name}" class="drug-image">
            
            <div class="details-section">
                <div class="section-title">المعلومات الأساسية</div>
                <div class="detail-row">
                    <div class="detail-label">التركيب:</div>
                    <div class="detail-value">${currentDrug.composition || '---'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">الشكل الصيدلاني:</div>
                    <div class="detail-value">${currentDrug.form || '---'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">العيار:</div>
                    <div class="detail-value">${currentDrug.caliber || '---'}</div>
                </div>
            </div>
            
            <div class="details-section">
                <div class="section-title">الاستخدام والجرعة</div>
                <div class="detail-row">
                    <div class="detail-label">الاستطباب:</div>
                    <div class="detail-value">${currentDrug.indication || '---'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">الجرعة:</div>
                    <div class="detail-value">${currentDrug.dosage || '---'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">طريقة الاستعمال:</div>
                    <div class="detail-value">${currentDrug.usage || '---'}</div>
                </div>
            </div>
            
            <div class="details-section">
                <div class="section-title">معلومات إضافية</div>
                <div class="detail-row">
                    <div class="detail-label">الخلاصة:</div>
                    <div class="detail-value">${currentDrug.summary || '---'}</div>
                </div>
                <div class="detail-row">
                    <div class="detail-label">ملاحظات:</div>
                    <div class="detail-value">${currentDrug.notes || '---'}</div>
                </div>
                ${currentDrug.oldName ? `
                <div class="detail-row">
                    <div class="detail-label">الاسم القديم:</div>
                    <div class="detail-value">${currentDrug.oldName}</div>
                </div>
                ` : ''}
            </div>
            
            <div class="price-tag">
                السعر: ${currentDrug.price || '---'}
            </div>
            
            <div class="footer">
                <p>تصميم وتطوير: Youlla Al Abdullah</p>
                <p>تاريخ الطباعة: ${new Date().toLocaleDateString('ar-SA')}</p>
            </div>
        </body>
        </html>
    `;
    
    // كتابة المحتوى في النافذة الجديدة
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // انتظار تحميل المحتوى ثم الطباعة
    printWindow.onload = function() {
        printWindow.print();
    };
}

function printDrugList() {
    if (!currentDrugType) return;
    
    // إنشاء نافذة جديدة للطباعة
    const printWindow = window.open('', '_blank');
    
    // الحصول على قائمة الأدوية
    const drugs = allDrugs[currentDrugType] || [];
    
    // بناء جدول الأدوية
    let drugsTable = '';
    drugs.forEach((drug, index) => {
        drugsTable += `
            <tr>
                <td>${index + 1}</td>
                <td>${drug.name}</td>
                <td>${drug.composition || '---'}</td>
                <td>${drug.indication || '---'}</td>
                <td>${drug.price || '---'}</td>
            </tr>
        `;
    });
    
    // بناء محتوى HTML للطباعة
    const printContent = `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <title>قائمة الأدوية - ${currentDrugType}</title>
            <style>
                body {
                    font-family: 'Tajawal', sans-serif;
                    direction: rtl;
                    padding: 20px;
                    line-height: 1.6;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #6a4c93;
                    padding-bottom: 15px;
                }
                .list-title {
                    font-size: 24px;
                    font-weight: bold;
                    color: #6a4c93;
                    margin-bottom: 5px;
                }
                .drugs-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                .drugs-table th, .drugs-table td {
                    padding: 10px;
                    border: 1px solid #ddd;
                    text-align: right;
                }
                .drugs-table th {
                    background-color: #6a4c93;
                    color: white;
                }
                .drugs-table tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                .footer {
                    margin-top: 30px;
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                    border-top: 1px solid #ddd;
                    padding-top: 15px;
                }
                @media print {
                    body {
                        padding: 10px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="list-title">قائمة الأدوية - ${currentDrugType}</div>
                <div>موقع معلومات الأدوية - حمص</div>
            </div>
            
            <table class="drugs-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>اسم الدواء</th>
                        <th>التركيب</th>
                        <th>الاستطباب</th>
                        <th>السعر</th>
                    </tr>
                </thead>
                <tbody>
                    ${drugsTable}
                </tbody>
            </table>
            
            <div class="footer">
                <p>تصميم وتطوير: Youlla Al Abdullah</p>
                <p>تاريخ الطباعة: ${new Date().toLocaleDateString('ar-SA')}</p>
            </div>
        </body>
        </html>
    `;
    
    // كتابة المحتوى في النافذة الجديدة
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // انتظار تحميل المحتوى ثم الطباعة
    printWindow.onload = function() {
        printWindow.print();
    };
}

// -------------------- وظيفة التصدير إلى PDF --------------------
function exportToPDF() {
    if (!currentDrugType) return;
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // إضافة الخط العربي (محاكاة)
    doc.setFont('helvetica');
    
    // العنوان
    doc.setFontSize(20);
    doc.text(`Drug List - ${currentDrugType}`, 105, 20, { align: 'center' });
    
    // الحصول على قائمة الأدوية
    const drugs = allDrugs[currentDrugType] || [];
    
    // إضافة الأدوية
    let yPosition = 40;
    doc.setFontSize(12);
    
    drugs.forEach((drug, index) => {
        if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
        }
        
        doc.text(`${index + 1}. ${drug.name}`, 20, yPosition);
        yPosition += 7;
        doc.setFontSize(10);
        doc.text(`Composition: ${drug.composition || 'N/A'}`, 25, yPosition);
        yPosition += 5;
        doc.text(`Indication: ${drug.indication || 'N/A'}`, 25, yPosition);
        yPosition += 5;
        doc.text(`Price: ${drug.price || 'N/A'}`, 25, yPosition);
        yPosition += 10;
        doc.setFontSize(12);
    });
    
    // حفظ الملف
    doc.save(`drug-list-${currentDrugType}.pdf`);
}

// -------------------- وظائف المشاركة --------------------
function shareDrug() {
    if (!currentDrug) return;
    
    // نص المشاركة
    const shareText = `دواء: ${currentDrug.name}\nالتركيب: ${currentDrug.composition}\nالاستطباب: ${currentDrug.indication}\nالجرعة: ${currentDrug.dosage}\nمعلومات من موقع معلومات الأدوية - حمص`;
    
    // التحقق من دعم واجهة المشاركة
    if (navigator.share) {
        navigator.share({
            title: `معلومات دواء: ${currentDrug.name}`,
            text: shareText,
            url: window.location.href
        })
        .catch(err => console.log('فشلت المشاركة:', err));
    } else {
        // نسخ النص إلى الحافظة كبديل
        navigator.clipboard.writeText(shareText)
            .then(() => {
                showNotification('تم نسخ معلومات الدواء إلى الحافظة');
            })
            .catch(err => {
                console.log('فشل نسخ النص:', err);
                showNotification('لا يمكن المشاركة في هذا المتصفح');
            });
    }
}

// -------------------- وظائف المفضلة --------------------
function toggleFavorite() {
    if (!currentDrug) return;
    
    const favoriteBtn = document.getElementById('favorite-btn');
    const drugId = currentDrug.id;
    
    if (favoriteDrugs.includes(drugId)) {
        // إزالة من المفضلة
        favoriteDrugs = favoriteDrugs.filter(id => id !== drugId);
        favoriteBtn.classList.remove('active');
        favoriteBtn.querySelector('i').className = 'far fa-heart';
        showNotification('تم إزالة الدواء من المفضلة');
    } else {
        // إضافة إلى المفضلة
        favoriteDrugs.push(drugId);
        favoriteBtn.classList.add('active');
        favoriteBtn.querySelector('i').className = 'fas fa-heart';
        showNotification('تم إضافة الدواء إلى المفضلة');
    }
    
    // حفظ في التخزين المحلي
    localStorage.setItem('favoriteDrugs', JSON.stringify(favoriteDrugs));
}

// -------------------- وظائف دوران وتكبير الصورة --------------------
function rotateImage() {
    imageRotation += 90;
    const imgElement = document.getElementById('modal-drug-image');
    const scale = isImageZoomed ? 1.5 : 1;
    imgElement.style.transform = `rotate(${imageRotation}deg) scale(${scale})`;
}

function toggleImageZoom() {
    const imgElement = document.getElementById('modal-drug-image');
    isImageZoomed = !isImageZoomed;
    const scale = isImageZoomed ? 1.5 : 1;
    imgElement.style.transform = `rotate(${imageRotation}deg) scale(${scale})`;
    
    // تغيير أيقونة الزر
    const zoomBtn = document.getElementById('zoom-image-btn');
    zoomBtn.querySelector('i').className = isImageZoomed ? 'fas fa-search-minus' : 'fas fa-search-plus';
}

// -------------------- وظيفة الإشعارات --------------------
function showNotification(message) {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // إضافة الأنماط
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--primary-color);
        color: white;
        padding: 15px 25px;
        border-radius: 50px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideDown 0.3s ease-out;
    `;
    
    // إضافة إلى الصفحة
    document.body.appendChild(notification);
    
    // إزالة بعد 3 ثواني
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// -------------------- وظيفة إضافة تأثير الموجة --------------------
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('button-ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// -------------------- وظيفة زر العودة للأعلى --------------------
function toggleScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// -------------------- الإعداد الأولي والمستمعات --------------------
document.addEventListener('DOMContentLoaded', () => {
    // تهيئة AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }
    
    // التحقق من تفضيل الوضع الليلي
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle-nav').querySelector('i').className = 'fas fa-sun';
        document.getElementById('theme-toggle-nav').querySelector('span').textContent = 'الوضع النهاري';
    }
    
    // التحقق من وجود اسم مستخدم محفوظ
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
        userName = savedUserName;
        document.getElementById('user-name-display').textContent = userName;
        document.getElementById('welcome-user-name').textContent = userName;
        document.getElementById('welcome-modal').style.display = 'none';
    } else {
        // عرض نافذة الترحيب
        document.getElementById('welcome-modal').style.display = 'flex';
    }
    
    // زر إدخال اسم المستخدم
    document.getElementById('submit-name-btn').addEventListener('click', () => {
        const nameInput = document.getElementById('user-name-input');
        if (nameInput.value.trim()) {
            userName = nameInput.value.trim();
            localStorage.setItem('userName', userName);
            document.getElementById('user-name-display').textContent = userName;
            document.getElementById('welcome-user-name').textContent = userName;
            document.getElementById('welcome-modal').style.display = 'none';
            showNotification(`مرحباً بك ${userName}!`);
        } else {
            nameInput.style.borderColor = 'red';
            setTimeout(() => {
                nameInput.style.borderColor = '#eee';
            }, 2000);
        }
    });
    
    // زر الدخول في الصفحة الأولى
    document.getElementById('enter-btn').addEventListener('click', function(e) {
        createRipple(e);
        setTimeout(() => {
            goToPage(2);
        }, 300);
    });
    
    // زر فتح الشريط الجانبي
    document.getElementById('menu-toggle-btn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
    });
    
    // زر إغلاق الشريط الجانبي
    document.getElementById('close-sidebar-btn').addEventListener('click', () => {
        document.getElementById('sidebar').classList.remove('open');
    });
    
    // عناصر التنقل في الشريط الجانبي
    document.querySelectorAll('.nav-item[data-page]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pageNum = item.getAttribute('data-page');
            goToPage(parseInt(pageNum));
        });
    });
    
    // زر تبديل الوضع النهاري/الليلي
    document.getElementById('theme-toggle-nav').addEventListener('click', toggleTheme);
    
    // بطاقات اختيار نوع الدواء
    document.querySelectorAll('.type-card').forEach(card => {
        card.addEventListener('click', () => {
            const drugType = card.getAttribute('data-type');
            loadDrugList(drugType);
        });
    });
    
    // زر إغلاق النافذة المنبثقة
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    
    // إغلاق النافذة المنبثقة عند النقر خارجها
    document.getElementById('details-modal').addEventListener('click', (e) => {
        if (e.target.id === 'details-modal') {
            closeModal();
        }
    });
    
    // التبويبات
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // زر دوران الصورة
    document.getElementById('rotate-image-btn').addEventListener('click', rotateImage);
    
    // زر تكبير الصورة
    document.getElementById('zoom-image-btn').addEventListener('click', toggleImageZoom);
    
    // زر طباعة بطاقة الدواء
    document.getElementById('print-drug-btn').addEventListener('click', printDrugCard);
    
    // زر طباعة قائمة الأدوية
    document.getElementById('print-list-btn').addEventListener('click', printDrugList);
    
    // زر التصدير إلى PDF
    document.getElementById('export-list-btn').addEventListener('click', exportToPDF);
    
    // زر مشاركة الدواء
    document.getElementById('share-drug-btn').addEventListener('click', shareDrug);
    
    // زر المفضلة
    document.getElementById('favorite-btn').addEventListener('click', toggleFavorite);
    
    // زر إضافة لقائمة المستخدم
    document.getElementById('add-to-list-btn').addEventListener('click', () => {
        showNotification('تم إضافة الدواء لقائمتك');
    });
    
    // البحث في قائمة الأدوية
    document.getElementById('drug-search').addEventListener('input', (e) => {
        filterDrugs(e.target.value);
    });
    
    // زر الإعدادات
    document.getElementById('settings-nav').addEventListener('click', (e) => {
        e.preventDefault();
        showNotification('قريباً');
    });
    
    // إغلاق الشريط الجانبي عند النقر خارجه على الشاشات الصغيرة
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        const menuBtn = document.getElementById('menu-toggle-btn');
        
        if (window.innerWidth <= 768 && 
            sidebar.classList.contains('open') && 
            !sidebar.contains(e.target) && 
            !menuBtn.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
    
    // معالجة تغيير حجم الشاشة
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    });
    
    // التمرير لعرض زر العودة للأعلى
    window.addEventListener('scroll', toggleScrollToTop);
    
    // زر العودة للأعلى
    document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);
    
    // إضافة أنماط CSS للإشعارات
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
            to {
                opacity: 1;
                transform: translate(-50%, 0);
            }
        }
        
        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translate(-50%, 0);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -20px);
            }
        }
    `;
    document.head.appendChild(style);
});