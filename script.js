let currentItem={}, cart=[], currentQuantity=1;

// Popup món ăn
function showPopup(name,price,img){
    currentItem={name,price,img};
    currentQuantity=1;
    document.getElementById('popup-name').innerText=name;
    document.getElementById('popup-price').innerText=price.toLocaleString()+'₫';
    document.getElementById('popup-img').src=img;
    document.getElementById('popup-quantity').innerText=currentQuantity;
    document.getElementById('popup-total').innerText=(price*currentQuantity).toLocaleString()+'₫';
    document.getElementById('popup-note').value='';
    document.getElementById('overlay').style.display='block';
    document.getElementById('overlay').classList.add('show');
    document.getElementById('food-popup').classList.add('show');
}

function closePopup(){
    document.getElementById('food-popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    setTimeout(()=>{
        if(!document.getElementById('cart-popup').classList.contains('open') &&
           !document.getElementById('menu-sidebar').classList.contains('open'))
            document.getElementById('overlay').style.display='none';
    },300);
}

function changeQuantity(delta){
    currentQuantity+=delta;
    if(currentQuantity<1) currentQuantity=1;
    document.getElementById('popup-quantity').innerText=currentQuantity;
    document.getElementById('popup-total').innerText=(currentItem.price*currentQuantity).toLocaleString()+'₫';
}

function addToCart(){
    let note=document.getElementById('popup-note').value;
    cart.push({...currentItem,quantity:currentQuantity,note:note});
    updateCart();
    closePopup();
}

function buyNow(){
    let note=document.getElementById('popup-note').value;
    const item={...currentItem,quantity:currentQuantity,note:note};
    const totalPrice=item.price*item.quantity;
    alert(`Thanh toán thành công!\nMón: ${item.name}\nSố lượng: ${item.quantity}\nTổng: ${totalPrice.toLocaleString()}₫`);
    cart.push(item);
    updateCart();
    closePopup();
}

// Cập nhật giỏ hàng
function updateCart(){
    const container=document.getElementById('cart-items');
    container.innerHTML='';
    let total=0;
    cart.forEach((item,index)=>{
        total += item.price*item.quantity;
        const div=document.createElement('div');
        div.className='cart-item';
        div.innerHTML=`
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <span>${item.price.toLocaleString()}₫</span>
                <div class="quantity-controls">
                    <button onclick="changeCartQuantity(${index},-1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="changeCartQuantity(${index},1)">+</button>
                </div>
            </div>
            <textarea readonly>${item.note||''}</textarea>
            <strong>Thành tiền: ${(item.price*item.quantity).toLocaleString()}₫</strong>
            <button onclick="removeItem(${index})">🗑️ Xóa</button>
        `;
        container.appendChild(div);
    });
    document.getElementById('cart-total').innerText=total.toLocaleString();
    document.getElementById('cart-count').innerText=cart.length;
}

function changeCartQuantity(index,delta){
    cart[index].quantity+=delta;
    if(cart[index].quantity<1) cart[index].quantity=1;
    updateCart();
}

function removeItem(index){cart.splice(index,1);updateCart();}

// Giỏ hàng
function openCart(){
    document.getElementById('cart-popup').classList.add('open');
    document.getElementById('overlay').style.display='block';
    setTimeout(()=> document.getElementById('overlay').classList.add('show'),10);
}
function closeCart(){
    document.getElementById('cart-popup').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
    setTimeout(()=>document.getElementById('overlay').style.display='none',300);
}

// Sidebar MENU
function openMenuSidebar(){
    document.getElementById('overlay').style.display='block';
    document.getElementById('overlay').classList.add('show');
    document.getElementById('menu-sidebar').classList.add('open');
}
function closeMenuSidebar(){
    document.getElementById('menu-sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
    setTimeout(()=>{
        if(!document.getElementById('food-popup').classList.contains('show') &&
           !document.getElementById('cart-popup').classList.contains('open'))
            document.getElementById('overlay').style.display='none';
    },300);
}

// Overlay bấm ngoài popup đóng tất cả
document.getElementById('overlay').addEventListener('click', ()=>{
    closePopup();
    closeCart();
    closeMenuSidebar();
});

// Thanh toán
function checkout(){
    if(cart.length===0){ alert("Giỏ hàng trống!"); return;}
    let total=cart.reduce((sum,item)=>sum+item.price*item.quantity,0);
    alert("Thanh toán thành công! Tổng: "+total.toLocaleString()+"₫");
    cart=[]; updateCart(); closeCart();
}

// Nút bấm giỏ hàng
document.querySelector('.cart-icon').addEventListener('click', openCart);
