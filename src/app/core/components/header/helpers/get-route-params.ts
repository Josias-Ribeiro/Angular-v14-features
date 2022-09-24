import { inject } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

export const getRoutParams = (key: string) => {
    return inject(ActivatedRoute).snapshot.params[key]
}