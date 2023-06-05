import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { AiFillEdit, AiOutlineCheck, AiTwotoneRest } from "react-icons/ai";
import Swal from "sweetalert2";

export const PendingTask = ({ tasks, setTasks, setComp }) => {
  const pendingTasks = tasks.filter((task) => !task.completed);
  const handleEdit = (task) => {
    Swal.fire({
      title: "Vamos a modificar el título aquí...",
      html: '<input id="swal-input1">',
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        return { name: document.getElementById("swal-input1").value };
      },
    }).then((result) => {
      if (result.value) {
        const editArr = [...tasks];
        const index = editArr.indexOf(task);
        editArr[index].name = document.getElementById("swal-input1").value;
        setTasks(editArr);
        console.log(editArr);
      }
    });
  };

  const handleDelete = (index) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "¿Estás seguro de eliminar la peli?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Eliminada!",
            "La peli ya no esta en tus pendientes",
            "success"
          );
          //FUNCIONALIDAD
          const eliminarArr = [...tasks];
          eliminarArr.splice(index, 1);
          setTasks(eliminarArr);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  useEffect(() => {
    const completedArr = [];
    for (const element of tasks) {
      if (element.completed === true) {
        completedArr.push(element);
      }
      setComp(completedArr);
    }
  }, [tasks]);

  const handleComplete = (id) => {
    Swal.fire({
      title: "¿Todo listo?",
      text: "Si ya viste el film, confirmalo aquí",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Completada",
      denyButtonText: `Aún no...`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Completado!", "", "success");
        //FUNCIONALIDAD
        const arr = [...tasks];
        const i = arr.findIndex((item) => item.id === id);
        arr[i].completed = !arr[i].completed;
        setTasks(arr);
      } else if (result.isDenied) {
        Swal.fire("No Completado", "", "info");
      }
    });
  };

  const elements = tasks.map((task, i) => (
    <ListGroup as="ol" numbered key={task.id} tasks={pendingTasks}>
      <ListGroup.Item as="li" className="my-2 border border-0 rounded-pill">
        <label className="fs-4">{task.name}</label>
        <div className="d-flex justify-content-end">
          <Button variant="primary mx-1" onClick={() => handleEdit(task)}>
            <AiFillEdit />
          </Button>
          <Button
            variant="success mx-1"
            onClick={() => handleComplete(task.id)}
          >
            <AiOutlineCheck />
          </Button>
          <Button variant="danger mx-1" onClick={() => handleDelete(i)}>
            <AiTwotoneRest />
          </Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  ));

  return (
    <>
      <Container>
        <Row>
          <Col className="text-center">{elements}</Col>
        </Row>
      </Container>
    </>
  );
};