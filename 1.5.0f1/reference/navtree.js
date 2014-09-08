var NAVTREE =
[
  [ "Thinkscroller", "index.html", [
    [ "Reference Manual", "index.html", [
      [ "Getting Started Guide", "guide.html", [
        [ "Installation", "installation.html", null ],
        [ "Creating a Parallax Scene", "create.html", null ],
        [ "Scroll Layers and Scroll Layer Modes", "modes.html", null ],
        [ "Animating Scroll Layers", "animation.html", null ],
        [ "Example Project", "examples.html", null ]
      ] ],
      [ "Thinkscroller Tutorial Series", "tutorial.html", [
        [ "Thinkscroller Tutorial Series #1: Getting Started / Feature Overview", "tutorial1.html", null ],
        [ "Thinkscroller Tutorial Series #2: Making a Parallax Scrolling Character", "tutorial2.html", null ]
      ] ],
      [ "Advanced Topics", "advanced.html", [
        [ "Object Layer Workflow", "objectlayerworkflow.html", null ]
      ] ],
      [ "Component Reference", "components.html", [
        [ "Parallax Manager", "parallaxmanager.html", null ],
        [ "Scroll Layer (Auto-Billboard Layer)", "scroll_layer_a.html", null ],
        [ "Scroll Layer (UV Scrolling Layer)", "scroll_layer_b.html", null ],
        [ "Scroll Layer (Object Layer)", "scroll_layer_c.html", null ],
        [ "Scroll Layer Animation", "scroll_layer_animation.html", null ]
      ] ],
      [ "Changelog", "changelog.html", null ]
    ] ],
    [ "Class List", "annotated.html", [
      [ "ThinksquirrelSoftware.Thinkscroller.IParallax", "interface_thinksquirrel_software_1_1_thinkscroller_1_1_i_parallax.html", null ],
      [ "ThinksquirrelSoftware.Thinkscroller.IScrollLayer", "interface_thinksquirrel_software_1_1_thinkscroller_1_1_i_scroll_layer.html", null ],
      [ "ThinksquirrelSoftware.Thinkscroller.Parallax", "class_thinksquirrel_software_1_1_thinkscroller_1_1_parallax.html", null ],
      [ "ThinksquirrelSoftware.Thinkscroller.ScrollLayer", "class_thinksquirrel_software_1_1_thinkscroller_1_1_scroll_layer.html", null ],
      [ "ThinksquirrelSoftware.Thinkscroller.ScrollLayerAnimation", "class_thinksquirrel_software_1_1_thinkscroller_1_1_scroll_layer_animation.html", null ],
      [ "ThinksquirrelSoftware.Thinkscroller.ThinkscrollerBase", "class_thinksquirrel_software_1_1_thinkscroller_1_1_thinkscroller_base.html", null ]
    ] ],
    [ "Class Index", "classes.html", null ],
    [ "Class Hierarchy", "hierarchy.html", [
      [ "ThinksquirrelSoftware.Thinkscroller.IParallax", "interface_thinksquirrel_software_1_1_thinkscroller_1_1_i_parallax.html", [
        [ "ThinksquirrelSoftware.Thinkscroller.Parallax", "class_thinksquirrel_software_1_1_thinkscroller_1_1_parallax.html", null ]
      ] ],
      [ "ThinksquirrelSoftware.Thinkscroller.IScrollLayer", "interface_thinksquirrel_software_1_1_thinkscroller_1_1_i_scroll_layer.html", [
        [ "ThinksquirrelSoftware.Thinkscroller.ScrollLayer", "class_thinksquirrel_software_1_1_thinkscroller_1_1_scroll_layer.html", null ]
      ] ],
      [ "ThinksquirrelSoftware.Thinkscroller.ThinkscrollerBase", "class_thinksquirrel_software_1_1_thinkscroller_1_1_thinkscroller_base.html", [
        [ "ThinksquirrelSoftware.Thinkscroller.Parallax", "class_thinksquirrel_software_1_1_thinkscroller_1_1_parallax.html", null ],
        [ "ThinksquirrelSoftware.Thinkscroller.ScrollLayer", "class_thinksquirrel_software_1_1_thinkscroller_1_1_scroll_layer.html", null ],
        [ "ThinksquirrelSoftware.Thinkscroller.ScrollLayerAnimation", "class_thinksquirrel_software_1_1_thinkscroller_1_1_scroll_layer_animation.html", null ]
      ] ]
    ] ],
    [ "Class Members", "functions.html", null ],
    [ "Packages", "namespaces.html", [
      [ "ThinksquirrelSoftware.Thinkscroller", "namespace_thinksquirrel_software_1_1_thinkscroller.html", null ]
    ] ],
    [ "Package Functions", "namespacemembers.html", null ]
  ] ]
];

function createIndent(o,domNode,node,level)
{
  if (node.parentNode && node.parentNode.parentNode)
  {
    createIndent(o,domNode,node.parentNode,level+1);
  }
  var imgNode = document.createElement("img");
  if (level==0 && node.childrenData)
  {
    node.plus_img = imgNode;
    node.expandToggle = document.createElement("a");
    node.expandToggle.href = "javascript:void(0)";
    node.expandToggle.onclick = function() 
    {
      if (node.expanded) 
      {
        $(node.getChildrenUL()).slideUp("fast");
        if (node.isLast)
        {
          node.plus_img.src = node.relpath+"ftv2plastnode.png";
        }
        else
        {
          node.plus_img.src = node.relpath+"ftv2pnode.png";
        }
        node.expanded = false;
      } 
      else 
      {
        expandNode(o, node, false);
      }
    }
    node.expandToggle.appendChild(imgNode);
    domNode.appendChild(node.expandToggle);
  }
  else
  {
    domNode.appendChild(imgNode);
  }
  if (level==0)
  {
    if (node.isLast)
    {
      if (node.childrenData)
      {
        imgNode.src = node.relpath+"ftv2plastnode.png";
      }
      else
      {
        imgNode.src = node.relpath+"ftv2lastnode.png";
        domNode.appendChild(imgNode);
      }
    }
    else
    {
      if (node.childrenData)
      {
        imgNode.src = node.relpath+"ftv2pnode.png";
      }
      else
      {
        imgNode.src = node.relpath+"ftv2node.png";
        domNode.appendChild(imgNode);
      }
    }
  }
  else
  {
    if (node.isLast)
    {
      imgNode.src = node.relpath+"ftv2blank.png";
    }
    else
    {
      imgNode.src = node.relpath+"ftv2vertline.png";
    }
  }
  imgNode.border = "0";
}

function newNode(o, po, text, link, childrenData, lastNode)
{
  var node = new Object();
  node.children = Array();
  node.childrenData = childrenData;
  node.depth = po.depth + 1;
  node.relpath = po.relpath;
  node.isLast = lastNode;

  node.li = document.createElement("li");
  po.getChildrenUL().appendChild(node.li);
  node.parentNode = po;

  node.itemDiv = document.createElement("div");
  node.itemDiv.className = "item";

  node.labelSpan = document.createElement("span");
  node.labelSpan.className = "label";

  createIndent(o,node.itemDiv,node,0);
  node.itemDiv.appendChild(node.labelSpan);
  node.li.appendChild(node.itemDiv);

  var a = document.createElement("a");
  node.labelSpan.appendChild(a);
  node.label = document.createTextNode(text);
  a.appendChild(node.label);
  if (link) 
  {
    a.href = node.relpath+link;
  } 
  else 
  {
    if (childrenData != null) 
    {
      a.className = "nolink";
      a.href = "javascript:void(0)";
      a.onclick = node.expandToggle.onclick;
      node.expanded = false;
    }
  }

  node.childrenUL = null;
  node.getChildrenUL = function() 
  {
    if (!node.childrenUL) 
    {
      node.childrenUL = document.createElement("ul");
      node.childrenUL.className = "children_ul";
      node.childrenUL.style.display = "none";
      node.li.appendChild(node.childrenUL);
    }
    return node.childrenUL;
  };

  return node;
}

function showRoot()
{
  var headerHeight = $("#top").height();
  var footerHeight = $("#nav-path").height();
  var windowHeight = $(window).height() - headerHeight - footerHeight;
  navtree.scrollTo('#selected',0,{offset:-windowHeight/2});
}

function expandNode(o, node, imm)
{
  if (node.childrenData && !node.expanded) 
  {
    if (!node.childrenVisited) 
    {
      getNode(o, node);
    }
    if (imm)
    {
      $(node.getChildrenUL()).show();
    } 
    else 
    {
      $(node.getChildrenUL()).slideDown("fast",showRoot);
    }
    if (node.isLast)
    {
      node.plus_img.src = node.relpath+"ftv2mlastnode.png";
    }
    else
    {
      node.plus_img.src = node.relpath+"ftv2mnode.png";
    }
    node.expanded = true;
  }
}

function getNode(o, po)
{
  po.childrenVisited = true;
  var l = po.childrenData.length-1;
  for (var i in po.childrenData) 
  {
    var nodeData = po.childrenData[i];
    po.children[i] = newNode(o, po, nodeData[0], nodeData[1], nodeData[2],
        i==l);
  }
}

function findNavTreePage(url, data)
{
  var nodes = data;
  var result = null;
  for (var i in nodes) 
  {
    var d = nodes[i];
    if (d[1] == url) 
    {
      return new Array(i);
    }
    else if (d[2] != null) // array of children
    {
      result = findNavTreePage(url, d[2]);
      if (result != null) 
      {
        return (new Array(i).concat(result));
      }
    }
  }
  return null;
}

function initNavTree(toroot,relpath)
{
  var o = new Object();
  o.toroot = toroot;
  o.node = new Object();
  o.node.li = document.getElementById("nav-tree-contents");
  o.node.childrenData = NAVTREE;
  o.node.children = new Array();
  o.node.childrenUL = document.createElement("ul");
  o.node.getChildrenUL = function() { return o.node.childrenUL; };
  o.node.li.appendChild(o.node.childrenUL);
  o.node.depth = 0;
  o.node.relpath = relpath;

  getNode(o, o.node);

  o.breadcrumbs = findNavTreePage(toroot, NAVTREE);
  if (o.breadcrumbs == null)
  {
    o.breadcrumbs = findNavTreePage("index.html",NAVTREE);
  }
  if (o.breadcrumbs != null && o.breadcrumbs.length>0)
  {
    var p = o.node;
    for (var i in o.breadcrumbs) 
    {
      var j = o.breadcrumbs[i];
      p = p.children[j];
      expandNode(o,p,true);
    }
    p.itemDiv.className = p.itemDiv.className + " selected";
    p.itemDiv.id = "selected";
    $(window).load(showRoot);
  }
}

