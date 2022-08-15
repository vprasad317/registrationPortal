import { GridAddressComponent } from "../components/grid-address/grid-address.component";
import { GridOperationsComponent } from "../components/grid-operations/grid-operations.component";

export interface AddressModel {
    city: string,
    state: string,
    pin: number
}

export interface userDataModel {
    id: number,
    name: string,
    email: string,
    address: AddressModel[]
}

export const UserColDefs = [
    {
        field: 'name',
        headerName: 'User Name'
    },
    {
        field: 'email',
        headerName: 'Email'
    },
    {
        field: 'address',
        headerName: 'Address',
        cellRenderer: GridAddressComponent
    },
    {
        field: 'id',
        headerName: 'Action',
        cellRenderer: GridOperationsComponent
    }
];

export interface ColDataModel {
    headerName: string,
    field: string,
    cellRenderer?: any
}