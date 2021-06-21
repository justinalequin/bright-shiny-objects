// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘


//Create User

function createUser(firstName, lastName){
    const user = {
        firstName: firstName,
        lastName: lastName
    };
    return user;
    }
    //Set Age
    function setAge(user, age){
        user.age=age;
         return user;
        }
       
        
    // Increment Age
    function incrementAge(user){
         user.age++;
        return user;
        }
        
    //Fix Car
    function fixCar(car) {
        car.needsMaitenance = false;
        return car;
    }

    //Add Grades
    function addGrades(student, newGrades) {
        student.grades = student.grades.concat(newGrades);
        return student;
    }

    //Get Data Type
    function getDataType(obj, key){
        const value = obj[key]
        const type = typeof value;
        return type;
    }

    // Add Todo
    function addTodo(todos, newTodo){
    todos.push(newTodo);
    return todos;
    }

    //Add Song
    function addSong(playlist, song) {
        playlist.songs.push(song);
        playlist.duration += song.duration;
        return playlist;
    }

    // Update Report Card
    function updateReportCard(reportCard, newGrade) {
        reportCard.grades.push(newGrade);
        
        if (newGrade < reportCard.lowestGrade){
            reportCard.lowestGrade = newGrade;
        }

        if (newGrade > reportCard.highestGrade) {
            reportCard.highestGrade = newGrade;
        }
        let gradeSum = 0;
        for (const grade of reportCard.grades) {
            gradeSum += grade;
        }
        const gradeAverage = gradeSum / reportCard.grades.length;
        reportCard.average = gradeAverage;
        return reportCard;
    }

    
    
    
    
    
    
    
    // ┌─────────────────────────────────────────────────────────────────────────┐
    // │ Code used for testing. Do not modify!                                   │                         
    // │                                                                         │
    const isDef = (arg) => arg === 'function';
    const pass = () => undefined;
    // │                                                                         │
    module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
    module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
    module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
    module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
    module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
    module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
    module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
    module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
    module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
    // │                                                                         │
    // └─────────────────────────────────────────────────────────────────────────┘
    