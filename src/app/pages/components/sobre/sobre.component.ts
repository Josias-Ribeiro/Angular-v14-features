import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { getRoutParams } from 'src/app/core/components/header/helpers/get-route-params';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit {
public form = this._formBuilder.group({
  email: ['josias@hotmail.com'],
  password: ['']
})

public id = getRoutParams

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  

}
