import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  public formPeriodicidade: FormGroup;

  public valueForm: any;
  
  get nome() { return this.formPeriodicidade.get('nome') }
  get sobrenome() { return this.formPeriodicidade.get('sobrenome') }
  get contatos() { return this.formPeriodicidade.get('contatos') as FormArray }

  constructor(private formBuilder: FormBuilder) {}

  
  ngOnInit(): void {
    this.configurarFormulario();
  }
  
  configurarFormulario() {
    this.formPeriodicidade = this.formBuilder.group({
      nome: [''],
      sobrenome: [''],
      contatos: this.formBuilder.array([]),
    });

     //this.addNewContatos()
  }


  addNewContatos() {
      let contatosFormGroup = this.formBuilder.group({
        telefone: [null],
        redeSocial: [null],
      });
    
    this.contatos.push(contatosFormGroup);
  }

  emitForm(){
    this.valueForm =  this.formPeriodicidade.value
  }

  removeContact(index: number){
    console.log(index);
    this.contatos.removeAt(index)

  }

}
