const natalia = {//Esta es la manera de crear un objeto literal
    name: 'Natalia',
    age: 20,//Los valores de cada atributo pueden ser distintos (num, string, array,boolean)
    cursosAprobados: [
        'Curso definitivo de HTML y CSS',
        'Curso practico de HTML y CSS',
    ],
    /* aprobarCurso: function() {

    } */
    aprobarCurso(nuevoCurso) {//Aqui creamos un metodo dentro del objeto
        this.cursosAprobados.push(nuevoCurso);
        //This hace referencia al objeto dentro del cual esta esa este metodo
    }
};

//Hacer que natalia apruebe otro curso

/* natalia.cursosAprobados.push('Curso de responsive'); */
//Esto puede hacerse con todos los atributos dentro del objeto 'natalia'

//creacion de un prototipo por DENTRO del objeto
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /* this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    } */
}
//creacion de un prototipo por FUERA del objeto
Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

//Creacion de una instancia del prototipo Student
const juanita = new Student(
    'Juanita Alejandra',
    15,
    [
        'curso de introduccion a los videojuegos',
        'Creacion de personajes',
    ]
);