import React from 'react'
import GlobalContext from './GlobalContext';

function GlobalState(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
        <GlobalContext.Provider value={{
            open: open,
            setOpen: setOpen
        }}>
            {props.children}
        </GlobalContext.Provider>

    </div>
  )
}

export default GlobalState