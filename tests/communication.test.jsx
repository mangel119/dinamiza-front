// Importar el componente, vitest y msw
import { Convcard } from "@/widgets/cards/convcard";
import { describe, expect, test } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";

// Crear un servidor mock con los datos esperados
const server = setupServer(
  rest.get("http://localhost:3000/convocatorias", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "Convocatoria 1",
          description: "Descripción 1",
          advertising: "Imagen 1",
          terms: "PDF 1",
          dateStart: "Fecha 1",
          dateEnd: "Fecha 2",
          team: "Equipo 1",
          category: "Categoría 1",
          tel: "Teléfono 1",
          email: "Correo 1",
        },
        {
          id: 2,
          name: "Convocatoria 2",
          description: "Descripción 2",
          advertising: "Imagen 2",
          terms: "PDF 2",
          dateStart: "Fecha 3",
          dateEnd: "Fecha 4",
          team: "Equipo 2",
          category: "Categoría 2",
          tel: "Teléfono 2",
          email: "Correo 2",
        },
      ]),
    );
  }),
);

// Iniciar el servidor mock antes de los tests
beforeAll(() => server.listen());

// Cerrar el servidor mock después de los tests
afterAll(() => server.close());

// Escribir el test
describe("Convcard hace el fetch correctamente", () => {
  it("La aplicación resuelve el fetch al servidor", async () => {
    // Renderizar el componente con vitest
    const { container } = render(<Convcard />);

    // Esperar a que se resuelva el fetch
    await waitFor(() => expect(container.querySelector("h5")).toBeDefined());
  });
  it("La apliación renderiza el nombre de la Convocatoria 1", async () => {
    // Renderizar el componente con vitest
    const { container } = render(<Convcard />);

    // Esperar a que se resuelva el fetch
    await waitFor(() => expect(container.querySelector("h5")).toBeDefined());
    expect(screen.getByText("Convocatoria 1"));
  });
  it("La apliación renderiza la descripción de la Convocatoria 2", async () => {
    // Renderizar el componente con vitest
    const { container } = render(<Convcard />);

    // Esperar a que se resuelva el fetch
    await waitFor(() => expect(container.querySelector("h5")).toBeDefined());
    expect(screen.getByText("Descripción 2"));
  });
});
