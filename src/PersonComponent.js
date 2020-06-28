import React from 'react';

export default function PersonComponent(props) {
	return <div className="col-md-4 my-3" key={props.person.id}>
		<div className="card">
			<img src={props.person.img} class="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.person.name}</h5>
				<p className="card-text">Age:{props.person.age}</p>
				<a href="#" class="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	</div>;
}
