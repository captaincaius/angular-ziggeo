/* SystemJS module definition */

declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// ZiggeoApi
declare const ZiggeoApi: any;
namespace ZiggeoApi {
    // namespace V2 {}
    export interface V2 {
        Application: any;
        Player: any;
   }
}
declare class Player {
    activate: any;
}
