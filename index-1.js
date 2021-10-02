// REVIEW 


// 3. Write a program to print out.
 
// a.
for(let x = 0; x < 7; x++)
{
    console.log(x);
}

// b.
let n = prompt ('Hay nhap mot so n');

for(let x = 0; x < n; x++)
{
    console.log(x);
}

// c.
let n = prompt ('Hay nhap mot so n');
for(let x = 3; x < n; x++)
{
    console.log(x);
}

// d.
let c = prompt('Hay nhap mot so c');
let n = prompt('Hay nhap mot so n');

for(c; c < n; c++){
    console.log(c);
}  

// e.
let c = prompt('Hay nhap mot so c');
let n = prompt('Hay nhap mot so n');
let i = parseInt (c);

for (i; i < n;){
    console.log(i);
}

// f.
let c = prompt('Hay nhap mot so c');
let n = prompt('Hay nhap mot so n');
let s = prompt('Hay nhap mot so s');
let i = parseInt (c);
let o = parseInt (s);

for (; o < n;){
    console.log(o);
    o = o + i; 
}


// 4. Write a program to calculate the factorial.
let n = prompt('Nhap ket qua  cua n')
let  giaithua = 1;
for(let i=1; i<=n; i++){
    giaithua *= i
}
alert('giaithua bang' + giaithua);


// 5.Write a program 
let age = prompt('Ban du tuoi xem truong trinh');
if(age < 14)
{
    console.log('xem chuong trinh');
}
else if (age < 14)
{
    console.log('Xin loi ban chua du tuoi')
}


