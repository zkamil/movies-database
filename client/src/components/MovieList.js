import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';


class MovieList extends Component {

    state = {
        items:[
            {id: uuid(), name: 'BatMan' },
            {id: uuid(), name: 'The Dark Knight' },
            {id: uuid(), name: 'Avengers' },
            {id: uuid(), name: 'Justice League' },
            {id: uuid(), name: 'Doctor Strange' },
            {id: uuid(), name: 'Super Man' },
        ]
    }

   render() {
       const { items } = this.state;
       return(
          <Container>
              <Button
              color="dark"
              size={{marginBottom: '2rem'}}
              onClick={() =>{
                const name = prompt('Enter Movie')
                if(name) {
                    this.setState(state => ({
                        items: [...state.items, { id: uuid(), name}]
                    }));
                }
              }}
              >Add Movie</Button>
              <ListGroup>
                  <TransitionGroup className="movie-list">
                    {items.map(({ id, name }) => (
                       <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button
                                className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick={() =>{
                                    this.setState(state => ({
                                        items: state.items.filter(item => item.id !== id)
                                    }));
                                }}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                       </CSSTransition> 
                    ))}
                  </TransitionGroup>
              </ListGroup>
          </Container>
       );
   }
}

export default MovieList;