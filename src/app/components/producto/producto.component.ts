import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: any;
  producto: any;
  titulo = 'Crear';
  accion = 'Registrar';
  productoModel: Producto = new Producto();
  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    
    this.productoModel.idproducto = 0;
    this.listar();
  }
  listar(): void {
    
    this.productoService.getProductos().subscribe((data)=>{
     
      this.productos=data;
      console.log(this.productos);
    })
  }

  public create(): void {
    if(this.productoModel.idproducto==0){
    this.productoService.addRol(this.productoModel).subscribe(
      response => {
        this.listar();
        Swal.fire('Nuevo Producto', `Producto ${this.productoModel.nomprod} creado con exito`, "success")
        this.productoModel.nomprod= '';
        this.productoModel.precio= null;
        this.productoModel.stock= null;
      })
    }  
  }
}

/*else{
  this.productoService.updateRol(this.rolModel).subscribe(
    response=>{
      Swal.fire({
        title: 'Estas seguro?',
        text: "No podras revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.rolModel.idrol=0;
          this.titulo = 'Crear'
          this.accion = 'Registrar';
          this.listar();
          swal.fire(
            'Actualizado!',
            'El registro ha sido Modificado.',
            'success'
          )
          this.rolModel.nombre= '';
        }
      })    
  })
}  */
