# Angular Metarial UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.9.

## Install/Add Angular Material to Project
`ng add @angular/material`

## How to use Angualr Material / Import an Individual module ( like MatButtonModule) 

1) In app.module.ts add `import { MatButtonModule } from '@angular/material';` add `MatButtonModule` to import array

2) Add Material class in app.component.html
`<button mat-button>Hello World</button>`

## How to use Angualr Material / Import all module at once 

1) create a module using command `ng g m material` where all the material modules can be imported. Here `material` is just a name of a module where all material modules need to be listed.
2) Open `material.module.ts` and remove CommonModule from import array and add export array too.
3) Add all Material Modules that going to be used
4) Import Material Module in app.modules.ts








