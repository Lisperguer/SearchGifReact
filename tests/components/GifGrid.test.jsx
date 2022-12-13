import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')
describe("GifGrid()", () => {
  const category = "Disney";
  test("It appears isLoading at beginning", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando ..."));
    expect(screen.getByText(category));
  });

  test("It shows images with custom Hook useFetchGifs()", () => {

    const gifs = [
      {
        id:'1',
        title:'Hola',
        url:'www.gif.com'
      },
      {
        id:'2',
        title:'Disney',
        url:'www.gif.com'
      }
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
