function fontstyele(val){
    let v=document.getElementById('textbox')
    v.style.fontFamily=val
}
function bgcolor(val){
    let v=document.getElementById('textbox')
    v.style.backgroundColor=val
}
function fontcolor(val){
    document.getElementById('textbox').style.color=val
}
function fontsize(val){
    let v=document.getElementById('textbox')
    v.style.fontSize=val
}
let d=document.getElementById('button')
d.addEventListener('click',download_box)

function download_box() {
    html2canvas(document.getElementById('textbox')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'text.png';
        link.click();
    });
}