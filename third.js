const generateBtn = document.querySelector('form button');
const qrCodeBox = document.querySelector('.qr-code');
const qrInput = document.querySelector('form input');
const qrImage =document.querySelector('.qr-code img');


generateBtn.addEventListener('click' , ()=>{
    let qrvalu =qrInput.value;
    if(!qrvalu){
        return alert('لطفا یه متن یا ادرس وارد کن') 
    }

    generateBtn.innerText = 'درحال تولید  QR Code'
    qrImage.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalu}`
    qrImage.addEventListener('load', ()=>{
        qrCodeBox.classList.remove('hidden')
        generateBtn.innerText = ' تولیدQR Code'
        window.alert('امدی کیر بخوری خار کصه')

    })
})
qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value){
        qrCodeBox.classList.add('hidden')

    }
})
