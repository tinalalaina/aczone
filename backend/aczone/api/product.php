<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "12072024");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
switch($method)
{
  case "POST":
    if(isset($_FILES['pfile']))
    {
      $ptitle= $_POST['ptitle'];
      $pprice= $_POST['pprice'];
      $pstock= $_POST['pstock'];
      $pfile= time().$_FILES['pfile']['name'];
      $pfile_temp= $_FILES['pfile']['tmp_name'];
      $destination= $_SERVER['DOCUMENT_ROOT'].'/reactcrudphp/aczone/images'."/".$pfile;

      $result= mysqli_query($db_conn,"INSERT INTO tbl_product (ptitle, pprice,pstockinitiale,pstock, pfile)
      VALUES('$ptitle','$pprice','$pstock','$pstock','$pfile')");

      if($result)
      {
        move_uploaded_file($pfile_temp, $destination);
        echo json_encode(["success"=>"Product Inserted Successfully"]);
         return;
      } else{
        echo json_encode(["success"=>"Product Not Inserted!"]);
         return;
      }

    } else{
      echo json_encode(["success"=>"Data not in Correct Format"]);
      return;
    }

  break;
  case "GET":
    $result = mysqli_query($db_conn, "SELECT * FROM tbl_product");
    $products = [];
    while ($row = mysqli_fetch_assoc($result)) {
      $products[] = $row;
    }
    echo json_encode($products);
    break;
    case "DELETE":
      $path = explode('/', $_SERVER['REQUEST_URI']);
      $product_id = $path[5] ?? null;
      if ($product_id && is_numeric($product_id)) {
        // Récupérer le nom du fichier image avant de supprimer le projet
        $getProject = mysqli_query($db_conn, "SELECT pfile FROM tbl_product WHERE p_id='$product_id'");
        $project = mysqli_fetch_assoc($getProject);
        $imagePath = $_SERVER['DOCUMENT_ROOT'] . '/reactcrudphp/aczone/images/' . $project['pfile'];
  
        // Supprimer le projet de la base de données
        $result = mysqli_query($db_conn, "DELETE FROM tbl_product WHERE p_id='$product_id'");
        if ($result) {
            // Supprimer le fichier image
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
            echo json_encode(["success" => "Product Deleted Successfully"]);
        } else {
            echo json_encode(["error" => "Failed to delete product"]);
        }
    } else {
        echo json_encode(["error" => "Invalid product ID"]);
    }
    break;
}
?>