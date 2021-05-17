import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Multiselect } from "multiselect-react-dropdown";
import { Dropdown, Navbar, Nav } from "react-bootstrap";
function NavComp() {
  const data = [
    { name: "Россия", id: 1 },
    { name: "Бразилия", id: 2 },
    { name: "Казахстан", id: 3 },
    { name: "Украина", id: 4 },
    { name: "США", id: 5 },
    { name: "Таиланд", id: 6 },
    { name: "Беларусь", id: 7 },
  ];
  const tagsData = [
    { name: "Utm_source_1", id: 1 },
    { name: "Utm_source_2", id: 2 },
    { name: "Utm_source_3", id: 3 },
    { name: "Utm_source_4", id: 4 },
    { name: "Utm_source_5", id: 5 },
    { name: "Utm_source_6", id: 6 },
    { name: "Utm_source_7", id: 7 },
    { name: "Utm_source_8", id: 8 },
    { name: "Utm_source_9", id: 9 },
  ];
  const [country] = useState(data);
  const [tags] = useState(tagsData);
  const [countryCount, setCountryCount] = useState(0);
  const [tagsCount, setTagsCount] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [filterCount, setFilterCount] = useState(0);
  const countryFunc = (country) => {
    setCountryCount(country.length);
    setSelectedCountry(country);
    console.log(country);
    if (country.length === 1 && filterCount === 0) {
      setFilterCount(1);
    }
    if (country.length === 1 && filterCount === 1) {
      setFilterCount(2);
    }
  };
  const tagsFunction = (tags) => {
    setTagsCount(tags.length);
    setSelectedTags(tags);

    if (tags.length === 1 && filterCount === 0) {
      setFilterCount(1);
    }
    if (tags.length === 1 && filterCount === 1) {
      setFilterCount(2);
    }
  };
  const onCountryRemove = (country) => {
    setCountryCount(country.length);
    if (country.length === 0 && filterCount === 2) {
      setFilterCount(1);
    }
    if (country.length === 0 && filterCount === 1) {
      setFilterCount(0);
    }
  };
  const onTagsRemove = (tags) => {
    setCountryCount(tags.length);
    if (tags.length === 0 && filterCount === 2) {
      setFilterCount(1);
    }
    if (tags.length === 0 && filterCount === 1) {
      setFilterCount(0);
    }
  };
  const clear = () => {
    setFilterCount(0);
    setCountryCount(0);
    setTagsCount(0);
    setSelectedCountry([]);
    setSelectedTags([]);
  };
  // console.log(selectedCountry, "Country");
  console.log(selectedTags, "tags");
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Dot Simplify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Dropdown className="display-drop">
            <Dropdown.Toggle id="dropdown-basic">
              Фильтр {filterCount && filterCount > 0 ? filterCount : ""}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Вариант</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Другой вариант</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Вариант</Dropdown.Item>
              <Dropdown drop="right" id="dropdown-button-drop-right">
                <Dropdown.Toggle variant="dark w-100">
                  Страны {countryCount && countryCount > 0 ? countryCount : ""}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header className="text-center">
                    Страны
                  </Dropdown.Header>

                  <Multiselect
                    options={country} // Function will trigger on remove event
                    displayValue="name"
                    selectedValues={selectedCountry}
                    onRemove={onCountryRemove}
                    showArrow={true}
                    onSelect={countryFunc} // Property name to display in the dropdown options
                  />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown.Item href="#/action-2">Вариант 1</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Вариант 2</Dropdown.Item>{" "}
              <Dropdown drop="right" id="dropdown-button-drop-right">
                <Dropdown.Toggle variant="dark w-100">
                  Теги {tagsCount && tagsCount > 0 ? tagsCount : ""}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header className="text-center">
                    Теги
                  </Dropdown.Header>

                  <Multiselect
                    variant="m-2"
                    options={tags} // Function will trigger on remove event
                    displayValue="name"
                    showArrow={true}
                    selectedValues={selectedTags}
                    onRemove={onTagsRemove}
                    onSelect={tagsFunction} // Property name to display in the dropdown options
                  />
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link onClick={clear}>Очистить фильтры</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavComp;
