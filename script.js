function generateHTML() {
    var phoneNumber = document.getElementById('phoneNumber').value;
    var generatedHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Customer Support</title>
        <style>
          /* Style untuk tombol customer support */
          .support-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 20px;
            background-color: mediumseagreen;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          
          /* Checkbox yang tidak terlihat */
          .support-checkbox {
            display: none;
          }
          
          /* Style untuk popover */
          .popover {
            display: none;
            position: fixed;
            bottom: 70px;
            right: 40px;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            border-radius: 5px;
          }
          
          .popover p {
            margin-bottom: 10px;
          }
          
          .popover a {
            color: mediumseagreen;
            text-decoration: none;
            font-weight: bold;
            display: block;
            margin-top: 10px;
          }
          
          .close {
            position: absolute;
            top: 5px;
            right: 10px;
            cursor: pointer;
            font-size: 20px;
            color: #aaa;
          }
          
          /* Munculkan popover saat checkbox dicentang */
          .support-checkbox:checked ~ .popover {
            display: block;
          }
        </style>
      </head>
      <body>
  
        <div>
          <img src="https://i1.wp.com/www.mulbartoncommunityforum.co.za/wp-content/uploads/2020/08/Whatsapp-logo.png?ssl=1" alt="">
        </div>
  
        <input type="checkbox" id="supportCheckbox" class="support-checkbox">
        <label for="supportCheckbox" class="support-btn">Customer Support</label>
  
        <div class="popover">
          <img src="https://i1.wp.com/www.mulbartoncommunityforum.co.za/wp-content/uploads/2020/08/Whatsapp-logo.png?ssl=1" alt="" width="10px" height="auto">
          <a href="https://wa.me/${phoneNumber}" target="_blank">WhatsApp Customer Service</a>
          <span class="close">&times;</span>
        </div>
  
      </body>
      </html>
    `;
  
    document.getElementById('generatedCode').innerText = generatedHTML;
  }
  
 function updateButtonColor() {
    const customButton = document.querySelector('#customButton');
    const buttonColor = document.querySelector('#buttonColor').value;
    customButton.style.backgroundColor = buttonColor;
}

// Update teks tombol
function updateButtonText() {
    const customButton = document.querySelector('#customButton');
    const buttonText = document.querySelector('#buttonText').value;
    customButton.textContent = buttonText;
}

// Update teks pada popover
function updatePopoverText() {
    const popoverContent = document.querySelector('#popoverContent');
    const popoverText = document.querySelector('#popoverText').value;
    popoverContent.textContent = popoverText;
}

// Panggil fungsi update saat tombol ditekan
function updateButton() {
    updateButtonColor();
    updateButtonText();
    updatePopoverText();
}