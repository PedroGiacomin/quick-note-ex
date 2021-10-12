import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core"
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router-dom";

import {MdHome, MdNoteAdd, MdArchive} from "react-icons/md";
import {IoMdPerson} from "react-icons/io"

import "./Menu.css"

/** Como o Menu se repete entre as paginas, criamos ums componente para
 * ele para que ele nao renderize sempre que mudar de pagina. Isso deixa
 * o sistema mais eficiente. Pra isso dar certo tem alguns detalhes no routes.js
 */
function Menu(){

  const history = useHistory();
  const [currentPage, setCurrentPage] = useState("/home");

  //Funcao para ir pra pagina em um clique
  function handleClick(pathName){
    history.push(pathName);
    setCurrentPage(pathName);
  }

  //Cada item da lista vira um objeto do vetor, pois o que muda
  //entre os itens da lista eh so o nome, o icone e o caminho
  const itensDaLista = [
    {
      pathName: "/home",
      icon: <MdHome/>,
      text: "Minhas anotações"},
    {
      pathName: "/",
      icon: <MdNoteAdd/>,
      text: "Nova Anotação"},
    {
      pathName: "/",
      icon: <MdArchive/>,
      text: "Arquivo"},
    {
      pathName: "/profile",
      icon: <IoMdPerson/>,
      text: "Perfil"}
  ];  

  return(
    <Drawer open={true}>
      <List className="lista">

        {/**Faz um map para nao ter que repetir o mesmo processo
          * com todos os itens da lista manualmente */}
        {itensDaLista.map((item) => {
          return(
            <ListItem 
            button 
            onClick={() => handleClick(item.pathName)}
            selected={currentPage === item.pathName}>
            <ListItemIcon>
              <IconContext.Provider value={{color: "#343434", size: "1.5em"}}>
                {item.icon}
              </IconContext.Provider>
            </ListItemIcon>
            <ListItemText>
              <Typography>
                {item.text}
              </Typography>
            </ListItemText>
            </ListItem>
          ) 
        }
        )}
      </List>
    </Drawer>
  );
}

export default Menu;