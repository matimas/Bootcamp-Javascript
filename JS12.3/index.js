const school = {
	teachers: [
		{
			id: 1,
			name: 'Pinchas',
			subjects: ['chemistry', 'biology', 'physics'],
			students: [],
			capacityLeft: 3,
		},
		{
			id: 2,
			name: 'Williams',
			subjects: ['history', 'ethics'],
			students: [],
			capacityLeft: 2,
		},
	],
	students: [
		{
			id: 10,
			name: 'Jennifer',
			age: 20,
		},
		{
			id: 11,
			name: 'Howard',
			age: 23,
		},
		{
			id: 12,
			name: 'Old-Timmy',
			age: 86,
		},
		{
			id: 13,
			name: 'Houston',
			age: 21,
		},
	],
	findPerson(person, id) {
		let stuOrtech = '';
		if (person === 'student') {
			stuOrtech = this.students.find((stu) => stu.id === id);
			return stuOrtech;
		}
		if (person === 'teacher') {
			stuOrtech = this.teachers.find((teacher) => teacher.id === id);
			return stuOrtech;
		}
		return 'INPUT NOT INVALID';
	},
	
	assignStudent(subject, studentsID) {
		const stu = this.findPerson('student', studentsID);
		const availableTeachers = this.teachers.forEach((teacher) => {
			console.log(stu);
			if (teacher.subjects.includes(subject)) {
				if (teacher.capacityLeft > 0) {
					teacher.students.push(stu.name + stu.id);
					teacher.capacityLeft--;
				} else {
					console.log('Sorry, no available teachers left');
				}
			} else {
				console.log('Sorry, this subject not include in this school');
			}
		});
		console.log(this.teachers);
	},
	
	assignTeachersSubject(subject, teachersID) {
		this.teachers.forEach((teacher) => {
			if (!teacher.subjects.includes(subject) && teacher.id === teachersID) {
				teacher.subjects.push(subject);
				console.log('Added successfully');
			} else {
				console.log('The attempt failed');
			}
		});
		console.log(this.teachers);
	},

	removeStudent(studentID){
		console.log("Before we remove a student:", this.students);
		const found = this.students.find((student)=> student.id===studentID);
		this.students.splice(found,1);
		console.log("After we remove a student:", this.students);
	}
};


console.log(school.findPerson('', 12));
console.log(school.findPerson('student', 12));
console.log(school.findPerson('teacher', 2));

school.assignStudent('biology', 10);
school.assignTeachersSubject('math', 1);
school.removeStudent(10)
