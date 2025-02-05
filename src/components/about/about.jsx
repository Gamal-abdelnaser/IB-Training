// import { useGetgamalByNameQuery } from '../../Redux/programs';

// export const About = () => {
//   const { data, error, isLoading } = useGetgamalByNameQuery('heroes?populate=*');
  
//   if(data) {
//     console.log(data.data);
//   }
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data!</p>;
//   if (!data || !data.data) return <p>No data available.</p>;
//   if(data){

  
//   return (
//     <div className='h-screen mt-[200px]'>
//       <div>
//         {data.data.map((dt, index) => (
//           <div key={index}>
//             <img src={` http://localhost:1337${dt.herosImage[0].url}`} alt="" />
//             <h2 className='text-[40px]'>{dt.name}</h2>
//             {/* <p>{dt.store}</p> */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// }
import  { useState } from "react";

const initialSections = {
  team: {
    id: "team",
    title: "Team Members",
    items: [
      { id: 1, name: "John Doe", role: "CEO", image: "", bio: "Experienced leader with 10+ years in the industry" },
      { id: 2, name: "Jane Smith", role: "CTO", image: "", bio: "Technical expert with a passion for innovation" }
    ]
  },
  heroes: {
    id: "heroes",
    title: "Hero Sections",
    items: [
      { id: 1, title: "Welcome Hero", subtitle: "Discover Amazing Features", image: "", ctaText: "Get Started" },
      { id: 2, title: "Special Offer", subtitle: "Limited Time Deal", image: "", ctaText: "Learn More" }
    ]
  },
  programs: {
    id: "programs",
    title: "Programs",
    items: [
      { id: 1, name: "Basic Training", duration: "3 months", price: "$299", description: "Perfect for beginners", image: "" },
      { id: 2, name: "Advanced Course", duration: "6 months", price: "$599", description: "For experienced professionals", image: "" }
    ]
  },
};

export default function AdminDashboard() {
  const [sections, setSections] = useState(initialSections);
  const [selectedSection, setSelectedSection] = useState("team");
  const [editingItem, setEditingItem] = useState(null);
  const [newItem, setNewItem] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleAddNew = (sectionId) => {
    setNewItem({ id: Date.now(), name: "", image: "", description: "" });
  };

  const handleEdit = (sectionId, item) => {
    setEditingItem(item);
    setImagePreview(item.image);
  };

  const handleDelete = (sectionId, itemId) => {
    const updatedItems = sections[sectionId].items.filter((item) => item.id !== itemId);
    setSections({ ...sections, [sectionId]: { ...sections[sectionId], items: updatedItems } });
  };

  const handleSave = (sectionId, item) => {
    const updatedItems = editingItem
      ? sections[sectionId].items.map((i) => (i.id === item.id ? item : i))
      : [...sections[sectionId].items, item];
    
    setSections({ ...sections, [sectionId]: { ...sections[sectionId], items: updatedItems } });
    setEditingItem(null);
    setNewItem(null);
    setImagePreview(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        if (editingItem) {
          setEditingItem({ ...editingItem, image: reader.result });
        } else {
          setNewItem({ ...newItem, image: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-[150px] min-h-screen w-full bg-gray-100">
      <div className="w-[80%] mx-auto">
        <div className="flex gap-4 mb-6">
          {Object.values(sections).map((section) => (
            <button
              key={section.id}
              className={`px-4 py-2 text-[30px] font-semibold rounded-md ${selectedSection === section.id ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-[25px] font-semibold mb-4">{sections[selectedSection].title}</h2>
          <button className="px-4 py-2 bg-green-500 text-white text-[20px] rounded-md mb-4" onClick={() => handleAddNew(selectedSection)}>
            Add New
          </button>
          <div className="grid gap-4">
            {sections[selectedSection].items.map((item) => (
              <div key={item.id} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                <div>
                  <img src={item.image || ""} alt="Preview" className="w-16 h-16 object-cover rounded-md" />
                  <h3 className="text-lg font-bold">{item.name || item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description || item.bio || item.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md" onClick={() => handleEdit(selectedSection, item)}>Edit</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md" onClick={() => handleDelete(selectedSection, item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {(editingItem || newItem) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{editingItem ? "Edit Item" : "Add New Item"}</h3>
            <input type="text" placeholder="Name / Title" className="w-full mb-4 p-2 border rounded" value={editingItem?.name || newItem?.name || ""} onChange={(e) => (editingItem ? setEditingItem({ ...editingItem, name: e.target.value }) : setNewItem({ ...newItem, name: e.target.value }))} />
            <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full mb-4 p-2 border rounded" />
            {imagePreview && <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-md mb-4" />}
            <textarea placeholder="Description" className="w-full mb-4 p-2 border rounded" value={editingItem?.description || newItem?.description || ""} onChange={(e) => (editingItem ? setEditingItem({ ...editingItem, description: e.target.value }) : setNewItem({ ...newItem, description: e.target.value }))}></textarea>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-gray-500 text-white rounded" onClick={() => { setEditingItem(null); setNewItem(null); setImagePreview(null); }}>Cancel</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => handleSave(selectedSection, editingItem || newItem)}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
