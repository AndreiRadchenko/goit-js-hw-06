const itemRefs = document.querySelectorAll('li.item');
console.log( 'Number of categories: ', itemRefs.length );

itemRefs.forEach(item => {
    console.log('Category: ', item.firstElementChild.textContent);
    console.log( 'Elements: ', item.querySelectorAll('li').length);
})

