#### Time to Summarize What You've Learned

**Check Yourself — You Should Now Understand:**

*   What the Document Object Model (DOM) is and how its hierarchy is structured.
    
*   The main properties and attributes of DOM elements.
    
*   How to manipulate the DOM tree by creating and deleting elements.
    
*   The concept and functionality of browser events.
    
*   Handling events using addEventListener() and removeEventListener().
    
*   Applying events to form elements.
    

### **Homework: Topic 12. DOM Model. Events**

#### **Submission Requirements:**

1.  **Create a Repository:** goit-js-hw-07
    
2.  **Complete All Tasks:** Read each task carefully and execute it in a code editor.
    
3.  **Code Formatting:** Ensure the code is formatted using **Prettier**.
    
4.  **Error-Free Execution:** There should be no errors or warnings in the console when opening the live page.
    
5.  **Submit the Homework:** Provide two links:
    
    *   The repository with source files.
        
    *   The live page on **GitHub Pages**.
        
6.  **Attach a ZIP file of the repository.**
    

🔹 **IMPORTANT:** Read the instructions on uploading files to GitHub.

### **Task 1**

#### **Counting and Logging Categories in a List**

Using the DOM properties and methods, write a script that:

1.  Counts and logs the number of categories in ul#categories (i.e., li.item elements).
    
2.  For each li.item:
    
    *   Log the category name (text inside the 
        
        ).
        --
        
    *   Log the number of elements in that category.
        

💡 **Mentor will check:**

*   Categories and item counts are obtained using DOM methods.
    
*   Data is retrieved and logged using a loop (e.g., forEach()).
    
*   The expected console output matches the required format.
    

### **Task 2**

#### **Creating an Image Gallery**

Use the provided images array to create a gallery inside ul.gallery. You can use:

*   document.createElement() and .append()
    
*   Template literals with .insertAdjacentHTML()
    

**Requirements:**

*   All images should be added to the DOM in **one** operation.
    
*   Use **CSS flexbox** for styling.
    

   `✅ **Mentor will check:**

*   The gallery contains exactly **three** images.
    
*   The gallery is correctly inserted into ul.gallery.
    
*   The images are generated dynamically from the images array.
    
*   The gallery is **styled** using CSS flexbox.
    

### **Task 3**

#### **Dynamic Name Input**

Write a script that updates the text inside span#name-output as the user types in input#name-input.

**Rules:**

*   Trim whitespace from input values.
    
*   If the input is empty or contains only spaces, set the output to "Anonymous".  `

✅ **Mentor will check:**

*   An input event listener is attached to input#name-input.
    
*   The span#name-output updates correctly.
    
*   Empty inputs are handled correctly (default to "Anonymous").
    

### **Task 4**

#### **Login Form Handling**

Implement a login form with the following requirements:

1.  The form is submitted using the submit event.
    
2.  **Prevent page reload** on submission.
    
3.  If any field is empty, display an alert("All form fields must be filled in").
    
4.  Collect form data into an object { email, password } and log it.
    
5.  **Clear the form** after submission.
    

✅ **Mentor will check:**

*   The submit event is handled correctly.
    
*   The page does not reload upon form submission.
    
*   An alert is shown when required fields are empty.
    
*   A correctly structured object is logged in the console.
    
*   The form fields are cleared after submission.
    

### **Task 5**

#### **Random Background Color Change**

Create a script that changes the background color of the page when clicking button.change-color. Display the new color inside span.color.   ``

✅ **Mentor will check:**

*   The background color only changes when clicking button.change-color.
    
*   A new random color is applied each time.
    
*   The span.color text matches the applied background color.
    

### **Task 6**

#### **Creating and Destroying a Collection of Elements**

Implement a script with an input field and two buttons:

*   Create → Generates a collection of boxes.
    
*   Destroy → Clears all boxes.
    

**Rules:**

1.  The user enters a number (1-100) into the input field.
    
2.  Clicking Create renders that many 
    
     elements inside div#boxes.
    
3.  Clicking Destroy clears the collection.
    
4.  Boxes should:
    
    *   Start at **30px x 30px**.
        
    *   Increase in size by **10px** per box.
        
    *   Have a random background color.

✅ **Mentor will check:**

*   Validation ensures values between **1 and 100**.
    
*   The createBoxes(amount) function correctly generates elements.
    
*   The Destroy button fully clears the collection.
    

### **Final Notes**

*   Ensure your **GitHub repository** and **live page** are set up correctly.
    
*   Format your code before submission.
    
*   Follow all requirements to maximize your score! 🚀

___________________________________________

**Перевір себе — наразі ти маєш уявлення:**

*   що таке об'єктна модель документа і як будується ієрархія DOM-елементів
    
*   про основні властивості та атрибути DOM-елементів
    
*   як маніпулювати DOM деревом, створюючи та видаляючи елементи в ньому
    
*   про сутність та функціонал подій у браузері
    
*   про обробку подій з використанням методів addEventListener(), removeEventListener()
    
*   як застосовувати події елементів форм
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Прийшов час на практиці закріпити ці знання!   `

**Домашнє завдання Тема 12. Модель DOM. Події**

*   Створи репозиторій goit-js-hw-07
    
*   Прочитай кожне завдання та виконай його в редакторі коду
    
*   Завдання виконані в точній відповідності до ТЗ (забороняється змінювати вихідний HTML завдання).
    
*   У консолі відсутні помилки й попередження під час відкриття живої сторінки завдання.
    
*   Переконайся, що код відформатований за допомогою Prettier, а в консолі відсутні помилки й попередження під час відкриття живої сторінки завдання.
    
*   Здай домашнє завдання на перевірку
    

**Формат здачі:**

*   Домашня робота містить два посилання: на вихідні файли (посилання на репозиторій з кодом) і живу сторінку на GitHub Pages.
    
*   Прикрiплений файл репозиторію у форматi zip
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   ☝ ВАЖЛИВО  Переглянь Iнструкцію щодо завантаження робочого файлу з репозиторію на Github   `

**Формат оцінювання:**

*   Оцінка від 0 до 100
    

[Завантажуй стартові файли](https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/goitacademy/javascript-homework/tree/main/v3/07/src) ([альтернативне посилання](https://drive.google.com/drive/u/0/folders/1pPEXV-AIbkfUXRtU_Wmj18DBb2yQM8mS)) з готовою розміткою та підключеними файлами скриптів для кожного завдання. Скопіюй їх собі у проєкт. Зверни увагу, що стартові файли знаходяться в папці src. Але для створення живої сторінки на github дуже важливо, щоб файл index.html був в корені проєкту, тобто без додаткових вкладеностей. Тому ти маєш перенести собі в проєкт лише вміст папки src, а сама папка src тобі не потрібна.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Для стилізації розмітки твоїх завдань використовуй цей макет.   `

**Завдання 1**

HTML містить список категорій ul#categories.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML      `Animals -------        *   Cat        *   Hamster        *   Horse        *   Parrot        Products --------        *   Bread        *   Parsley        *   Cheese        Technologies ------------        *   HTML        *   CSS        *   JavaScript        *   React        *   Node.js`      

З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

1.  Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
    
2.  Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу 
    
    ) і кількість елементів у категорії (усіх *   , вкладених у нього).
    -------------------------------------------------------------------
    

**На що буде звертати увагу ментор при перевірці:**

*   Кількість категорій, їх назва та кількість елементів отримані за допомогою властивостей і методів DOM-елементів
    
*   Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()
    
*   У консолі має бути виведено наступне повідомлення:
    

**Завдання 2**

Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML

Використовуй масив об'єктів images для створення елементів , вкладених в 

*   .
    
    Ти можеш створити й додати HTML-елементи, використовуючи document.createElement() і elem.append() або шаблонні рядки і elem.insertAdjacentHTML().
    
    *   Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
        
    *   Додай мінімальне оформлення галереї флексбоксами через CSS класи.
        
    
    Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   const images = [    {      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",      alt: "White and Black Long Fur Cat",    },    {      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",      alt: "Orange and White Koi Fish Near Yellow Koi Fish",    },    {      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",      alt: "Group of Horses Running",    },  ];   `
    
    **На що буде звертати увагу ментор при перевірці:**
    
    *   Створена й додана в DOM галерея із трьох зображень
        
    *   Галерея додана у список ul.gallery і являє собою 3 елементи
        
    *   , в які вкладені елементи 
    *   Для створення елементів  використані дані з масиву об’єктів images
        
    *   Усі елементи галереї додані в DOM за одну операцію додавання
        
    *   Є мінімальне оформлення галереї флексбоксами через CSS класи
        
    
    **Завдання 3**
    
    Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".
    
    Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Hello, Anonymous! =================   `
    
    **На що буде звертати увагу ментор при перевірці:**
    
    *   На елементі input#name-input прослуховується подія input
        
    *   Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім’я для привітання
        
    *   Значення в інпуті очищене від пробілів по краях
        
    *   Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous"
        
    
    **Завдання 4**
    
    Напиши скрипт управління формою логіна.
    
    Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML      `Email            Password          Log in`
    
    1.  відправлення форми form.login-form повинна відбуватися за подією submit.
        
    2.  Під час відправлення форми сторінка не повинна перезавантажуватися.
        
    3.  Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
        
    4.  Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
        
    5.  При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
        
    
    **На що буде звертати увагу ментор при перевірці:**
    
    *   Прослуховується подія submit
        
    *   Під час відправлення форми сторінка не перезавантажується
        
    *   Якщо при сабміті у формі є незаповнені поля, виводиться alert
        
    *   При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
        
    *   Після сабміту елементи форми очищаються
        
    
    **Завдання 5**
    
    Напиши скрипт, який змінює колір фону елемента  через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
    
    Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML  `Background color: -    Change color`
    
    Для генерування випадкового кольору використовуй функцію getRandomHexColor().
    
    Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML``   function getRandomHexColor() {    return `#${Math.floor(Math.random() * 16777215)      .toString(16)      .padStart(6, 0)}`;  }   ``
    
    Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на буде у форматі rgb. Це нормально й не потребує якихось правок.
    
    **На що буде звертати увагу ментор при перевірці:**
    
    *   Фон на задається тільки після кліку на button.change-color
        
    *   При кожному кліку на елемент button.change-color фон зафарбовується новим рандомним кольором
        
    *   На і span.color значення одного й того самого кольору
        
    
    **Завдання 6**
    
    Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
    
    Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
    
    Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML    `Create    Destroy`
    
    Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові
    
    елементи в DOM.
    
    Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.
    
    Функція має створювати стільки 
    
    елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.
    
    1.  Розміри першого 
        
         елемента мають бути 30px на 30px.
        
    2.  Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
        
    3.  Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
        
    
    Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML``   function getRandomHexColor() {    return `#${Math.floor(Math.random() * 16777215)      .toString(16)      .padStart(6, 0)}`;  }   ``
    
    Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
    
    **На що буде звертати увагу ментор при перевірці:**
    
    *   Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
        
    *   Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
        
    *   Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
        
    *   Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
        
    *   Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
        
    *   Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися
