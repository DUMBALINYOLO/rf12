import React from "react";
import ReactDOM from "react-dom";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";
import CSS2DObject from "three-css2drender";
const { useRef, useCallback } = React;
const highlightNodes = new Set();
const highlightLinks = new Set();
var data = {
  nodes: [
    { id: "Myriel", group: 1 },
    { id: "Napoleon", group: 1 },
    { id: "Mlle.Baptistine", group: 1 },
    { id: "Mme.Magloire", group: 1 },
    { id: "CountessdeLo", group: 1 },
    { id: "Geborand", group: 1 },
    { id: "Champtercier", group: 1 },
    { id: "Cravatte", group: 1 },
    { id: "Count", group: 1 },
    { id: "OldMan", group: 1 },
    { id: "Labarre", group: 2 },
    { id: "Valjean", group: 2 },
    { id: "Marguerite", group: 3 },
    { id: "Mme.deR", group: 2 },
    { id: "Isabeau", group: 2 },
    { id: "Gervais", group: 2 },
    { id: "Tholomyes", group: 3 },
    { id: "Listolier", group: 3 },
    { id: "Fameuil", group: 3 },
    { id: "Blacheville", group: 3 },
    { id: "Favourite", group: 3 },
    { id: "Dahlia", group: 3 },
    { id: "Zephine", group: 3 },
    { id: "Fantine", group: 3 },
    { id: "Mme.Thenardier", group: 4 },
    { id: "Thenardier", group: 4 },
    { id: "Cosette", group: 5 },
    { id: "Javert", group: 4 },
    { id: "Fauchelevent", group: 0 },
    { id: "Bamatabois", group: 2 },
    { id: "Perpetue", group: 3 },
    { id: "Simplice", group: 2 },
    { id: "Scaufflaire", group: 2 },
    { id: "Woman1", group: 2 },
    { id: "Judge", group: 2 },
    { id: "Champmathieu", group: 2 },
    { id: "Brevet", group: 2 },
    { id: "Chenildieu", group: 2 },
    { id: "Cochepaille", group: 2 },
    { id: "Pontmercy", group: 4 },
    { id: "Boulatruelle", group: 6 },
    { id: "Eponine", group: 4 },
    { id: "Anzelma", group: 4 },
    { id: "Woman2", group: 5 },
    { id: "MotherInnocent", group: 0 },
    { id: "Gribier", group: 0 },
    { id: "Jondrette", group: 7 },
    { id: "Mme.Burgon", group: 7 }
  ],
  links: [
    { source: "Fauchelevent", target: "Valjean", value: 8 },
    { source: "Fauchelevent", target: "Javert", value: 1 },
    { source: "Bamatabois", target: "Fantine", value: 1 },
    { source: "Bamatabois", target: "Javert", value: 1 },
    { source: "Bamatabois", target: "Valjean", value: 2 },
    { source: "Perpetue", target: "Fantine", value: 1 },
    { source: "Simplice", target: "Perpetue", value: 2 },
    { source: "Simplice", target: "Valjean", value: 3 },
    { source: "Simplice", target: "Fantine", value: 2 },
    { source: "Simplice", target: "Javert", value: 1 },
    { source: "Judge", target: "Valjean", value: 3 },
    { source: "Judge", target: "Bamatabois", value: 2 },
    { source: "Champmathieu", target: "Valjean", value: 3 },
    { source: "Champmathieu", target: "Judge", value: 3 },
    { source: "Champmathieu", target: "Bamatabois", value: 2 },
    { source: "Brevet", target: "Judge", value: 2 },
    { source: "Brevet", target: "Champmathieu", value: 2 },
    { source: "Brevet", target: "Valjean", value: 2 },
    { source: "Brevet", target: "Bamatabois", value: 1 },
    { source: "Chenildieu", target: "Judge", value: 2 },
    { source: "Chenildieu", target: "Champmathieu", value: 2 },
    { source: "Chenildieu", target: "Brevet", value: 2 },
    { source: "Chenildieu", target: "Valjean", value: 2 },
    { source: "Chenildieu", target: "Bamatabois", value: 1 },
    { source: "Cochepaille", target: "Judge", value: 2 },
    { source: "Cochepaille", target: "Champmathieu", value: 2 },
    { source: "Cochepaille", target: "Brevet", value: 2 },
    { source: "Cochepaille", target: "Chenildieu", value: 2 },
    { source: "Cochepaille", target: "Valjean", value: 2 },
    { source: "Cochepaille", target: "Bamatabois", value: 1 },
    { source: "Eponine", target: "Mme.Thenardier", value: 2 },
    { source: "Eponine", target: "Thenardier", value: 3 },
    { source: "Anzelma", target: "Eponine", value: 2 },
    { source: "Anzelma", target: "Thenardier", value: 2 },
    { source: "Anzelma", target: "Mme.Thenardier", value: 1 },
    { source: "Woman2", target: "Valjean", value: 3 },
    { source: "Woman2", target: "Cosette", value: 1 },
    { source: "Woman2", target: "Javert", value: 1 },
    { source: "MotherInnocent", target: "Fauchelevent", value: 3 },
    { source: "MotherInnocent", target: "Valjean", value: 1 }
  ]
};

const hoverHandle = () => {
  // Graph
  // .nodeColor(Graph.nodeColor())
  // .linkWidth(Graph.linkWidth())
  // .linkDirectionalParticles(Graph.linkDirectionalParticles());
  console.log("yes");
  //   const div = document.getElementById("card");
  //   const nodeDrop = document.createElement(`div`);
  //   nodeDrop.innerHTML = `<div class='node_data'>
  //   <div class="container" style="font-size:10px;padding: 2px;
  //   background-color: red">
  //     <span>SUSPECT</span></br>
  //     <span>127.0.0.1</span>
  //   </div>
  // </div>`;
  //   div.appendChild(nodeDrop);
};

function App() {
  const fgRef = useRef();
  const extraRenderers = [new THREE.CSS2DRenderer()];
  const handleClick = useCallback(
    (node) => {
      console.log("yes");
      // Aim at node from outside it
      const distance = 400;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    },
    [fgRef]
  );

  return (
    <div id="container" style={{ backgroundColor: "#000" }}>
      <ForceGraph3D
        extraRenderers={extraRenderers}
        graphData={data}
        onNodeClick={handleClick}
        onNodeHover={(node) => {
          if ((!node && !highlightNodes.size) || (node && hoverNode === node))
            return;

          highlightNodes.clear();
          highlightLinks.clear();
          if (node) {
            highlightNodes.add(node);
            node.neighbors.forEach((neighbor) => highlightNodes.add(neighbor));
            node.links.forEach((link) => highlightLinks.add(link));
          }

          hoverNode = node || null;
          hoverHandle();
        }}
        nodeThreeObject={({ d }) => {
          const nodeDiv = document.createElement("div");
          nodeDiv.style.color = "#fff";
          nodeDiv.id = "card";
          const nodeDrop = document.createElement(`div`);
          nodeDrop.innerHTML = `<div class='node_data'>
          <div class="container" style="font-size:10px;padding: 2px;
          background-color: red">
            <span>SUSPECT</span></br>
            <span>127.0.0.1</span>
          </div>
        </div>`;
          const nodeEl = document.createElement("img");
          nodeEl.src =
            "https://i.picsum.photos/id/413/200/300.jpg?grayscale&hmac=tRjLMwjGNO2f5eslVTDQVGIYSmALshxJZAOR4qVMex4";
          nodeEl.style.height = "50px";
          nodeDiv.className = "node-label";
          nodeDiv.addEventListener("mouseover", function (e) {
            console.log("node clicked!!!");
          });
          nodeDiv.appendChild(nodeDrop);
          nodeDiv.appendChild(nodeEl);
          return new THREE.CSS2DObject(nodeDiv);
        }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("container"));
