export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

/**
 * 计算图片裁剪或者摆放位置
 * @param {*} type  contain, cover 暂时只兼容这两个模式
 * @param {*} containerWidth  容器宽度
 * @param {*} containerHeight  容器高度
 * @param {*} imgWidth   图片宽度
 * @param {*} imgHeight  图片高度
 * @return {*} canvas drawImage的所有入参
 */
export function getObjectFitSize(type = 'cover', containerWidth, containerHeight, imgWidth, imgHeight) {
  let radio = 1, // 容器与图片的比例
    sx = 0, // 开始剪切的 x 坐标位置。
    sy = 0, // 开始剪切的 y 坐标位置。
    swidth = imgWidth, // 被剪切图像的宽度。
    sheight = imgHeight, // 被剪切图像的高度。
    x = 0, // 在画布上放置图像的 x 坐标位置。
    y = 0, // 在画布上放置图像的 y 坐标位置。
    width = containerWidth, // 要使用的图像的宽度（伸展或缩小图像）。
    height = containerHeight; // 要使用的图像的高度（伸展或缩小图像）。
  let cWHRatio = containerWidth / containerHeight;
  let iWHRatio = imgWidth / imgHeight;
  if (type === 'cover') {
    // cover模式，需要裁剪
    if (iWHRatio >= cWHRatio) {
      // 横图，高先匹配，裁剪宽度
      radio = containerHeight / imgHeight;
      sx = (imgWidth - containerWidth / radio) / 2;
      swidth = containerWidth / radio;
      sheight = imgHeight;
    } else {
      // 竖图，宽先匹配，裁剪高度
      radio = containerWidth / imgWidth;
      sy = (imgHeight - containerHeight / radio) / 2;
      swidth = imgWidth;
      sheight = containerHeight / radio;
    }
  } else if (type === 'contain') {
    if (iWHRatio >= cWHRatio) {
      // 横图，宽先匹配，高度自适应
      radio = containerWidth / imgWidth;
      y = (containerHeight - imgHeight * radio) / 2;
      height = imgHeight * radio;
    } else {
      // 竖图，高先匹配，宽度自适应
      radio = containerHeight / imgHeight;
      x = (containerWidth - imgWidth * radio) / 2;
      width = imgWidth * radio;
    }
  }
  return {
    sx,
    sy,
    swidth,
    sheight,
    x,
    y,
    width,
    height,
  };
}
