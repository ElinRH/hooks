import React, { useState, useEffect } from 'react';

function App() {
  const { value: name, onChange } = useFormInput('welcome');
  const width = useWindowWidth();
  useDocumentTitle(name);

  return (
    <div>
      <h4>Width page: {width}</h4>
      <input value={name} onChange={onChange} />
    </div>
  );
}
function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}
function useFormInput(initialValue) {
  const [value, setName] = useState(initialValue);
  function handleChange(e) {
    setName(e.target.value)
  }
  return {
    value,
    onChange: handleChange
  }
}
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })
  return width;
}
// class App extends React.Component {
//   state = {
//     name: 'welcome',
//     width: window.innerWidth,
//   }
//   componentDidMount() {
//     document.title = this.state.name;
//     window.addEventListener('resize', this.handleResize);
//   }
//   componentDidUpdate() {
//     document.title = this.state.name;
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }
//  handleResize = () => this.setState({ width: window.innerWidth });
//  handleChange = (e) => this.setState({ name: e.target.value });

//   render() {
//     return (
//       <div>
//         <h4>Width page: {this.state.width}</h4>
//         <input value={this.state.name} onChange={this.handleChange} />
//       </div>
//     )
//   }
// }
export default App;
