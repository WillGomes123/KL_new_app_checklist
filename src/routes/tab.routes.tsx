import { createDrawerNavigator } from "@react-navigation/drawer";

import Boletos from "../pages/Boletos";
import CarContracts from "../pages/CarContracts";
import CarDocuments from "../pages/CarDocuments";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import KlFreedom from "../pages/KlFreedom";
import Location from "../pages/Location";
import MyPayments from "../pages/MyPayment";
import NewLocation from "../pages/NewLocation";
import Profile from "../pages/Profile";
import RoutesRevise from "../pages/RoutesRevise";
import ScheduleService from "../pages/ScheduleService";


const drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <drawer.Navigator>
            <drawer.Screen
            name="Inicio"
            component={Home}
            />
            <drawer.Screen
            name="Boletos"
            component={Boletos}
            />

            <drawer.Screen
            name="Pagamento"
            component={MyPayments}
            />

            <drawer.Screen
            name="Locação"
            component={NewLocation}
            />

            <drawer.Screen
            name="Contratos"
            component={CarContracts}
            />

            <drawer.Screen
            name="Documentos do carro"
            component={CarDocuments}
            />

            <drawer.Screen
            name="Assinaturas"
            component={KlFreedom}
            />

            <drawer.Screen
            name="Agendar Serviços"
            component={ScheduleService}
            />

          
            <drawer.Screen
            name="Boletos"
            component={Boletos}
            />

            <drawer.Screen
            name="Contacts"
            component={Contacts}
            />

        </drawer.Navigator>
    )
}