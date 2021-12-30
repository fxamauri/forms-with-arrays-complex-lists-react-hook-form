import "./App.css";
import {useState} from "react";
import {ProductReactHookForm} from "./components/ProductsReactHookForm";
import {ListSelector} from "./components/ListSelector";
import {Products} from "./components/Products";


function App() {
    const [listReactHookFormIsSelected, setListReactHookFormIsSelected] = useState(false);

    const handleClickListSelector = () => {
        setListReactHookFormIsSelected(prevState => !prevState);
    }

    return (
        <>
            <header>
                <ListSelector
                    onClick={handleClickListSelector}
                    title="List with react hook form"
                    selected={listReactHookFormIsSelected}
                />
                <ListSelector
                    onClick={handleClickListSelector}
                    title="List useState"
                    selected={!listReactHookFormIsSelected}
                />
            </header>
            <section>
                {listReactHookFormIsSelected
                    ? <ProductReactHookForm/>
                    : <Products/>}
            </section>
        </>
    );
}

export default App;
