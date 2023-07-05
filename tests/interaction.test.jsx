import { Expand } from "@/widgets/cards/expand";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Interacción del Usuario para abrir una convocatoria", () => {
  it("Renderiza el botón de ver más", () => {
    render(
      <Expand
        nombre="nombre"
        descripcion="descripcion"
        imagen="imagen"
        pdf="terminos"
        inicio="fecha incio"
        fin="fecha fin"
        equipo="equipo"
        categoria="categoria"
        telefono="123"
        correo="correo"
      />,
    );
    const inicio = screen.getAllByText(/Ver más/i);
    expect(inicio[0]).toBeDefined();
  });
  it("Abre el cuadro de detalles de la convocatoria al presionar el botón", () => {
    render(
      <Expand
        nombre="nombre"
        descripcion="descripcion"
        imagen="imagen"
        pdf="terminos"
        inicio="fecha incio"
        fin="fecha fin"
        equipo="equipo"
        categoria="categoria"
        telefono="123"
        correo="correo"
      />,
    );
    const button = screen.getByText("Ver más");
    fireEvent.click(button);
    const dialogElement = screen.getByRole('dialog');
    expect(dialogElement).toBeTruthy();
  });
});
