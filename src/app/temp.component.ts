// cSpell:disable
import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, WritableSignal, computed, input, signal } from '@angular/core';

@Component({
    standalone: true,
    selector: 'temp',
    imports: [CommonModule],
    template: `
        <div class="w-full border-t-2 flex flex-row justify-center items-center">{{menssageFromParent()}}</div>
        <div class="w-full  flex flex-row justify-center items-center">    
            <div class="w-1/2 flex flex-col gap-2 bg-slate-400 border shadow p-2">
                <div class="flex justify-center items-center">
                    <div class="shadow-sm bg-white flex flex-col justify-center items-center p-2 rounded-md overflow-hidden">
                        <div class="text-3xl font-bold"> {{ objetCounter.mynumber}}</div>
                        <div class="text-xl ">Objeto normal</div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <div class="shadow-sm bg-white flex flex-col justify-center items-center p-2 rounded-md overflow-hidden">
                        <div class="text-3xl font-bold"> {{ counter }}</div>
                        <div class="text-xl ">variable normal</div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 flex flex-col gap-2 bg-blue-400 border shadow p-2">
                <div class="flex justify-center items-center">
                    <div class="shadow-sm bg-white flex flex-col justify-center items-center p-2 rounded-md overflow-hidden">
                        <div class="text-3xl font-bold"> {{ objectCounterSignal().myNumber }}</div>
                        <div class="text-xl ">Objeto signal</div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <div class="shadow-sm bg-white flex flex-col justify-center items-center p-2 rounded-md overflow-hidden">
                        <div class="text-3xl font-bold"> {{ counterTemp() }}</div>
                        <div class="text-xl ">variable signal</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center items-center">
            <button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" (click)="increment()">increment</button>
            <button class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" (click)="decrement()">decrement</button>
        </div>
        
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TempComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    menssageFromParent = input.required<string>();

    counter = 0;
    objetCounter: { mynumber: number } = { mynumber: 0 };
    objectCounterSignal = signal({ myNumber: 0 });
    counterSignal: WritableSignal<number> = signal<number>(0);

    counterTemp = computed(() => this.counterSignal() + 10);


    constructor() {
        console.log('ejecutando constructor');
        setTimeout(() => {
            this.increment();
            setTimeout(() => {
                this.decrement();
            }, 2000);
        }, 2000);
    }

    increment(): void {
        this.objetCounter.mynumber++;
        this.counter++;
        this.objectCounterSignal.update(state => ({ myNumber: state.myNumber + 1 }));
        this.counterSignal.update(state => state + 1);
    }
    decrement(): void {
        this.objetCounter.mynumber--;
        this.counter--;
        this.objectCounterSignal.update(state => ({ myNumber: state.myNumber - 1 }));
        this.counterSignal.update(state => state - 1);
    }





    // Life cycle
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ngOnChanges(changes: SimpleChanges): void {//changes: SimpleChanges
        console.log('ejecutando metodo ONCHANGES ====== ' + JSON.stringify(changes));
    }

    ngOnInit(): void {
        //se ejecuta una vez cuando se inicializa el componente, ideal para hacer peticiones, inicializar datos o configurar variables
        console.log('ejecutando metodo ONINIT ====== valeres de contador ' + this.counterSignal());
    }
    ngDoCheck(): void {
        //se ejecuta cada vez que se detecta un cambio o incluso cuando no hay cambios en las entradas
        //se puede realizar comprobaciones personalizadas en el estado del componente y realizar cambios si es necesario
        console.log('ejecutando metodo DOCHECK ====== valeres de contador ' + this.counterSignal());
    }
    ngAfterContentInit(): void {
        //podemos acceder y manipular el contenido proyectado antes de que se muestre al usuario
        console.log('ejecutando metodo AFTERCONTENTINIT ====== valeres de contador ' + this.counterSignal());
    }
    ngAfterContentChecked(): void {
        //se ejecuta después de cada detección de cambios, después de que el contenido proyectado ha sido verificado
        //validar el contenido proyectado y mostrar mensajes de error si es necesario
        console.log('ejecutando metodo AFTERCONTENTCHECKED ====== valeres de contador ' + this.counterSignal());
    }
    ngAfterViewInit(): void {
        //permite acceder y manipular la vista del componente, como elementos DOM y referencias a componentes secundarios
        console.log('ejecutando metodo AFTERVIEWINIT ====== valeres de contador ' + this.counterSignal());
    }
    ngAfterViewChecked(): void {
        //Se ejecuta después de cada detección de cambios, después de que la vista del componente ha sido verificada
        console.log('ejecutando metodo AFTERVIEWCHECKED ====== valeres de contador ' + this.counterSignal());
    }
    ngOnDestroy(): void {
        console.log('ejecutando metodo ONDESTROY ====== valeres de contador ' + this.counterSignal());
    }

}
//git push -u origin main
