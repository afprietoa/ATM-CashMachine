
export const cashMachine = (money, currencies) =>{
    const results = []

    console.log(money)

    let total = 0;
    currencies.forEach((currency)=>{
        total += currency.value*currency.quantity
    })

    console.log(total)

    if(money > total){
        alert("El cajero no tiene dinero suficiente para esta cantidad")
    }else if(money>=currencies[currencies.length-1].value && money<=total){
        let b= money%currencies[currencies.length-1].value
        if(b!=0){
            alert("Cantidad no valida. Por favor, ingrese múltiplos de 50.")
        }
        else if(b==0){
            let c;
            let d;
            let e;
            console.log(`La cantidad solicitada es ${money}`);

        for (let i = 0; i < currencies.length; i++) {
            if(i==0){
                c = Math.trunc(money/currencies[i].value);
                d = money%currencies[i].value;
            
                if(c>=0 && c<=currencies[i].quantity){
                    e=0;
                    if(c>0){
                        console.log(`el cajero le dará ${c} billetes de $ ${currencies[i].value}`);

                        results.push({
                            "val": currencies[i].value,
                            "qty": c
                        })
                    }
                }
                else if(c>currencies[i].quantity){
                    e = a - (currencies[i].quantity * currencies[i].value); 
                    console.log(`El cajero le dara ${currencies[i].quantity} billetes de $ ${currencies[i].value}`);

                    results.push({
                        "val": currencies[i].value,
                        "qty": currencies[i].quantity
                    })
                }



            }else{

                c=Math.trunc((d+e)/currencies[i].value);
                d = (d + e)%currencies[i].value;
                if(c>=0 && c<=currencies[i].quantity){
                    e=0;
                    if(c>0){
                        console.log(`el cajero le dará ${c} billetes de $ ${currencies[i].value}`);

                        results.push({
                            "val": currencies[i].value,
                            "qty": c
                        })
                    }
                }
                else if(c>currencies[i].quantity){
                    e = (d + e) - (currencies[i].quantity * currencies[i].value);
                    console.log(`El cajero le dara ${currencies[i].quantity} billetes de $ ${currencies[i].value}`);

                    results.push({
                        "val": currencies[i].value,
                        "qty": currencies[i].quantity
                    })
                }

            }
            
        }
                       
        }
    }else{
        alert("Operación no válida");
    }

    return results
}
