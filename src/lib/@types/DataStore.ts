
/*export class LazzyLoadedModule extends Module{

    InvokedByModule = new Object(); 
    CallerFunction = new Function();
    //CustomizedDataObject = new KeyObject();

    constructor(options: any){
        super();
        if ( options['lazzy'] == true ){
            //var moduleInvokeResult = sys.dynamicInstantiate(options['path']);
        }else{
            
        }
    }
}*/

export class GenericDataValueObject{
    Identifier:any;
    Values: any[] = new Array;
}


export class GenericDataStorage {
    
    DataCollection:Array<GenericDataValueObject> = new Array<GenericDataValueObject>();

    GetData (identifier: any){
        try{
            let val = this.DataCollection.find(el => el.Identifier == identifier)?.Values;
            return (val!.length > 1) ?  val : val![0][0]; 
        }catch{
            return null;
        }   
    }

    RemoveData (identifier: any){
        let i = this.DataCollection.findIndex(x => x.Identifier == identifier);
        this.DataCollection.splice(i, 1);
    }


    ExtendData (identifier: any, ...data: any[]){
        let i = this.DataCollection.findIndex((x: { Identifier: any; }) => x.Identifier == identifier);
        this.DataCollection[i].Values.push(data);
    }

    SetData (identifier: any, ...data: any[]){
        let obj = new GenericDataValueObject();
        obj.Identifier = identifier;
        obj.Values.push(data);
        this.DataCollection.push(obj);
    }
}
class RuntimeReferenceCollection {
    ActiveProcesses
    FileSystemHandle: any
    constructor() {
        this.ActiveProcesses = Array()
    }
}
class InitialObjectClone{
    ObjectClone = Object()
    InitialContext: any
    ClassName = String()
    TypeReference: any 
    IsMergedObject = false
    MergingMemberObjects
    constructor() {
        this.MergingMemberObjects = new Array();
    }
}
export class RuntimeSystemObject extends GenericDataStorage{

    RuntimeReferences
    InitialObjectClones

    constructor() {
        super();
        this.RuntimeReferences = new RuntimeReferenceCollection()
        this.InitialObjectClones = Array();
    }
}
export class LocationInfo {
    Dirname: any
    Filename: any
} 