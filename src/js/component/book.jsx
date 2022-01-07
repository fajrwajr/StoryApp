import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import axios from "axios";

export const Book = () => {
	const [book, setBook] = useState("");
	const [result, setResult] = useState([]);
	const [apiKey, setApiKey] = useState(
		"AIzaSyDmCb7PLOmNXijQwMVpxV8WZDjcUaeJqi0"
	);

	function handleChange(event) {
		const book = event.target.value;

		setBook(book);
	}

	function handleSubmit(event) {
		event.preventDefault();
		axios
			.get(
				"https://www.googleapis.com/books/v1/volumes?q=" +
					book +
					"&key=" +
					apiKey +
					"&maxResults=40"
			)
			.then((data) => {
				console.log(data.data.items);
				setResult(data.data.items);
			});
	}

	return (
		<div className="container">
			<h1>Search for more books</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						onChange={handleChange}
						className="form-control mt-10"
						placeholder="Search For Books"
						autoComplete="off"
					/>
				</div>
				<br></br>
				<button type="submit" className="btn btn-danger">
					Search
				</button>
			</form>
			{result.map((book) => (
				<>
					<a href={book.volumeInfo.previewLink}>
						<img
							src={book.volumeInfo.imageLinks.thumbnail}
							alt={book.title}
						/>
					</a>
				</>
			))}
		</div>
	);
};
