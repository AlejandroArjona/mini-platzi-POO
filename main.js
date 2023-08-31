/* const natalia = {//Esta es la manera de crear un objeto literal
    name: 'Natalia',
    age: 20,//Los valores de cada atributo pueden ser distintos (num, string, array,boolean)
    cursosAprobados: [
        'Curso definitivo de HTML y CSS',
        'Curso practico de HTML y CSS',
    ],
    /* aprobarCurso: function() {

    } 
    aprobarCurso(nuevoCurso) {//Aqui creamos un metodo dentro del objeto
        this.cursosAprobados.push(nuevoCurso);
        //This hace referencia al objeto dentro del cual esta esa este metodo
    }
}; */

//Hacer que natalia apruebe otro curso

/* natalia.cursosAprobados.push('Curso de responsive'); */
//Esto puede hacerse con todos los atributos dentro del objeto 'natalia'

//creacion de un prototipo por DENTRO del objeto
/* function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    /* this.aprobarCurso = function (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso)
    } 
} */
//creacion de un prototipo por FUERA del objeto
/* Student.prototype.aprobarCurso = function (nuevoCurso) {
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
); */

//Prototipos con la sintaxis de Clases

/* class Student2 {
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new Student2(
    'Miguel',
    28,
    [
        'Curso de analisis y ciencia de datos',
        'principios de visualizacion de datos'
    ],
); */

//Podemos almacenar los atributos dentro de un objeto en caso de que sean demasiados atributos
/* class Student2 {
    constructor({
        name, 
        age, 
        cursosAprobados = [],
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
} */

//Para poder hacer instancias debemos enviar un objeto literal con los atributos que se desean
/* const miguelito = new Student2({
    name: 'Miguel',
    age: 28,
    cursosAprobados: [
        'Curso de analisis y ciencia de datos',
        'principios de visualizacion de datos'
    ],
}); */
/* class LearningPath {

}

const escuelaWeb = new LearningPath();
const escuelaData = new LearningPath();
const escuelaVgs = new LearningPath();

class Student {//Las clases nos ayudan a construir instancias de una manera mas rapida
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({//Esta es una instancia de la clase Student
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
}); */

// Getters y setters en JS

class Course {
    constructor({
        name,
        classes = [],
    }) {
        this._name = name;
        this.classes = classes;
    }

    get name() { // Ejemplo de un getter, sirve para entrar a un atributo
        return this._name;
      }
    
    set name(nuevoNombrecito) {// Ejemplo de un setter, sirve para modificar un atributo
        if (nuevoNombrecito === "Curso Malito de Programación Básica") {
          console.error("Web... no");
        } else {
          this._name = nuevoNombrecito; 
        }
    }
}

const cursoProgBasica = new Course({
    name: 'Curso gratis de programacion basica',
});