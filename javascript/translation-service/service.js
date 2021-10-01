/// <reference path="./global.d.ts" />
import { NotAvailable } from "./errors";


export class TranslationService {
  constructor(api) {
    this.api = api;
  }
// Usando Promises
  //   free(text) {
  //  return new Promise((resolve, reject) => {
  //   // fetch vai buscar na API e me retornar uma Promise que contém uma tradução (não se sabe quando) 
  //   this.api.fetch(text)
  //              // then: registra um callback -> quando tiver um resultado, rode...
  //              .then(result => resolve(result.translation))
  //              // .catch: registra outro callback -> caso dê erro, chame...
  //              .catch(error => reject(error))
  //  })
  // }

// Usando async/await

  async free(text) {
    let resultado;
    resultado = await this.api.fetch(text);
  return resultado.translation;
    }
   
  async batch(texts) {
    if(texts == null || texts.length === 0){
      throw new BatchIsEmpty();
    }
    let traduzido = [];
    for (const texto of texts) {
     const traducao = await this.api.fetch(texto);
     traduzido.push(traducao.translation);
   
    }
      return traduzido;
    }

    async request(text) {
      for (let index = 1; index <= 3; index++) {
        try {
          await this.requestPromise(text);
          return undefined; 
        } catch (error) {
          if (index === 3) {
            throw error; 
          }
        }
        
      }
    }
  
  requestPromise (text) {
      return new Promise ((resolve, reject) => {
        this.api.request(text, error => {
          if (error == null){
            resolve(undefined);
          } else reject (error); 
        });
      });
  }     

 async premium(text, minimumQuality) {
   try{
     let resultado = await this.api.fetch(text);
     if(resultado.quality >= minimumQuality) {
       return resultado.translation;
     }else throw new QualityThresholdNotMet ();
   } catch (error){
     if (error instanceof NotAvailable){
       await this.request(text);
       return (await this.api.fetch(text)).translation;
     } else throw error;
   }
    
  }
}


export class QualityThresholdNotMet extends Error {
 
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}


export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
