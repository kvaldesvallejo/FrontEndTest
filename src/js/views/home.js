import React, { useState, useEffect } from "react";
import "../../styles/home.scss";

export const Home = () => {
	const [users, setUsers] = useState([]);
	const [therapists, setTherapists] = useState([]);
	const [patients, setPatients] = useState([]);

	const URL = "https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/";

	useEffect(() => {
		getUsers();
		getPatients();
		getTherapists();
	}, []);

	//_____________USER__________________________
	const getUsers = () => {
		fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/users")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				console.log(response);
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setUsers(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	};

	const addUser = () => {
		fetch(URL + "user", {
			method: "POST",
			body: JSON.stringify({
				fisrt_name: "tamara",
				last_name: "tamara",
				phone_number: "2514",
				user_name: "tamara",
				profile_picture: "21542tamara534154",
				account_type: "2",
				email: "tamara@gmail.com",
				password: "tamara"
			}), // data can be `string` or {object}!
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
		getUsers();
	};

	//____________________PATIENT________________________________
	const getPatients = () => {
		fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/patients")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				console.log(response);
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setPatients(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	};

	const addPatient = () => {
		fetch(URL + "patient", {
			method: "POST",
			body: JSON.stringify({
				user_id: "3",
				wishfearLESS: "Get better in my phobia",
				previous_help: false,
				zc: "33494"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
		getPatients();
	};

	//____________________THERAPISTS_____________________________________
	const getTherapists = () => {
		fetch("https://3000-pink-toad-rnysz19w.ws-us03.gitpod.io/therapists")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				console.log(response);
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setTherapists(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	};

	const addTherapist = () => {
		fetch(URL + "therapist", {
			method: "POST",
			body: JSON.stringify({
				user_id: "4",
				ofice_location: "7480 Sw 152 Ave",
				experience: "uhyidfkshgkdfsdkhjf",
				languages_spoke: "English"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(response => console.log("Success:", JSON.stringify(response)))
			.catch(error => console.error("Error:", error));
		getTherapists();
	};

	return (
		<div className="text-center mt-5 container">
			<p>USERS</p>
			<button type="button" className="btn btn-outline-primary" onClick={() => addUser()}>
				Add
			</button>

			<ul className="list-group list-group-flush">
				{users.map((value, index) => {
					return (
						<li className="list-group-item mx-1 py-1" key={index}>
							{value.fisrt_name}
						</li>
					);
				})}
			</ul>

			<p>PATIENTS</p>
			<button type="button" className="btn btn-outline-primary" onClick={() => addPatient()}>
				Add
			</button>
			<ul className="list-group list-group-flush">
				{patients.map((value, index) => {
					return (
						<li className="list-group-item mx-1 py-1" key={index}>
							{value.user_id}
						</li>
					);
				})}
			</ul>

			<p>THERAPISTS</p>
			<button type="button" className="btn btn-outline-primary" onClick={() => addTherapist()}>
				Add
			</button>
			<ul className="list-group list-group-flush">
				{therapists.map((value, index) => {
					return (
						<li className="list-group-item mx-1 py-1" key={index}>
							{value.user_id}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
