import './App.css'
export default function Card({ item }) {
    return (
      <div className="card">
        <img src={item.img} alt={item.title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{item.title}</h3>
          <h4>🐙<a href={item.link} className="card-link" target="_blank" rel="noopener noreferrer">Link</a></h4>
        </div>
      </div>
    );
  }