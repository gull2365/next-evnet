import { EventItem } from "./event-item";
import classes from "./event-list.module.css";
export const EventList = (props: { items: any }) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map(
        (event: {
          id: Key | null | undefined;
          title: any;
          locaion: any;
          date: any;
          image: any;
        }) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title} 
            location={event.locaion}
            date={event.date}
            image={event.image}
          />
        )
      )}
    </ul>
  );
};
