let name = document.getElementById('film_image');

let nameCoursesBlock = document.querySelector('#film_name')

let  courseApi = 'http://127.0.0.1:5500/Web-review-film-master/admin.html'

function start() {
    getCourse(rederCourse);

    handleAddForm();
        
    

}


// Functions 
function querySelector(callback) {
    fetch(courseApi)
    .then(function(response) {
        return response.json();
    })
    .then(callback);
}
function createCourse(data, callback) {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
};       
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);
    }


function rederCourse(courses) {
    let nameCoursesBlock = 
        document.querySelector('#film_name')
    let htmls = courses.map(function(course) {
        return `
        <li>
         <h2>${course.name}</h2>
        </li>
         `;       
    });
}
nameCoursesBlock.innerHTML = htmls.join('');

 function handleAddForm() {
     let addBtn = doccument.querySelector('#add)');

     addBtn.onclick = function(){
         let name = doccument.querySelector('input[name="name"]').value;
    
     let resetBtn = document.querySelector('#reset');
         let name = doccument.querySelector('input[name="name"]').value;

         let formData = {
             name: name
         }

         createCourse(formData, function() {
            getCourse(rederCourse);
         });


     }
 };



 
