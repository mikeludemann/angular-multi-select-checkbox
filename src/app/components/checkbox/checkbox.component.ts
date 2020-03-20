import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

	title: String;
	names: any;
	selectedAll: any;

	constructor() {
		this.title = "Select all/Deselect all checkbox";
		this.names = [
			{ name: 'John', selected: false },
			{ name: 'Mary', selected: false },
			{ name: 'James', selected: false },
			{ name: 'Samantha', selected: false },
			{ name: 'Jim', selected: false },
			{ name: 'Perry', selected: false },
			{ name: 'Logan', selected: false },
			{ name: 'Jane', selected: false },
		]
	}

	selectAll() {

		for (var i = 0; i < this.names.length; i++) {

			this.names[i].selected = this.selectedAll;

		}

	}

	checkIfAllSelected() {

		this.selectedAll = this.names.every(function(item:any) {

			return item.selected == true;

		})
	}

	ngOnInit() {
	}

}
