import React, { useState, FormEvent } from "react";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";

function TeacherList() {
	const [subject, setSubject] = useState("Artes");
	const [week_day, setWeekDay] = useState("0");
	const [time, setTime] = useState("08:00");

	const [teachers, setTeachers] = useState([]);

	async function searchTeachers(e: FormEvent) {
		e.preventDefault();

		const response = await api.get("classes", {
			params: { subject, week_day, time },
		});

		setTeachers(response.data);
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis">
				<form id="search-teachers" onSubmit={searchTeachers}>
					<Select
						name="subject"
						label="Matéria"
						onChange={(e) => {
							setSubject(e.target.value);
						}}
						value={subject}
						options={[
							{ value: "Artes", label: "Artes" },
							{ value: "Biologia", label: "Biologia" },
							{ value: "Matemática", label: "Matemática" },
							{ value: "Inglês", label: "Inglês" },
							{ value: "Língua Portuguesa", label: "Língua Portuguesa" },
						]}
					/>

					<Select
						name="week_day"
						label="Dia da semana"
						onChange={(e) => {
							setWeekDay(e.target.value);
						}}
						value={week_day}
						options={[
							{ value: "0", label: "Domingo" },
							{ value: "1", label: "Segunda" },
							{ value: "2", label: "Terça-feira" },
							{ value: "3", label: "Quarta-feira" },
							{ value: "4", label: "Quinta-feira" },
							{ value: "5", label: "Sexta-feira" },
							{ value: "6", label: "Sábado" },
						]}
					/>

					<Input
						name="time"
						label="Hora"
						type="time"
						onChange={(e) => {
							setTime(e.target.value);
						}}
						value={time}
					/>
					<button type="submit">Buscar</button>
				</form>
			</PageHeader>

			<main>
				{teachers.map((teacher: Teacher) => {
					return <TeacherItem teacher={teacher} key={teacher.id} />;
				})}
			</main>
		</div>
	);
}

export default TeacherList;
