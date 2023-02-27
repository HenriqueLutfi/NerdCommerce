import Head from "next/head";
import BasicModal from "@/Components/modal/modal";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Example(props: any) {
  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <h1>Cyberpunk 2077</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
        voluptate hic adipisci modi impedit? Totam quis repellendus, sit,
        explicabo in voluptate suscipit, nisi dignissimos delectus facilis
        pariatur consequuntur. Neque doloribus aliquam ex optio expedita
        deleniti repudiandae quas ullam odio est. Ratione repellendus doloribus
        consectetur culpa voluptatum est maiores earum odit.b
      </h2>
      <Button style={{}} />
      {Example(1)}
      <BasicModal />
    </>
  );
}
