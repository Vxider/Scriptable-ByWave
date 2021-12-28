// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: brown; icon-glyph: plane;
// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: plane;

var url = ""//订阅链接
var reset_day = 23; //流量重置日期
const CACHE_KEY_DATA = 'data';
const canvSize = 200;
const canvTextSize = 40;
const canvWidth = 22; //Battery circle thickness
const canvRadius = 85; //Battery circle radius
const battCircleRemainColor = new Color('#3E9BF7'); //Battery remaining color
const battCircleDepletedColor = new Color('#dddddd'); //Battery depleted color
const battCircleTextColor = new Color('#FFF'); //Widget text color (use same color as above to hide text)

const icon_url = 'data:image/png;base64,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'


// Import and setup Cache
const Cache = importModule('Cache');
const cache = new Cache('ByWaveWidget');

let req = new Request(icon_url)
let iconImage = await req.loadImage()

var data = await getdata()
let widget = createWidget()
Script.setWidget(widget)
Script.complete()


async function getdata(){
  const cached = await cache.read(CACHE_KEY_DATA, 30);
  if (cached) {
    return cached;
  }

  try {
    var req = new Request(url)
    req.method="GET"
    req.headers= {
          "User-Agent":
              "Quantumult%20X/1.0.21 (iPhone13,2; iOS 14.5)"
      };
    await req.load()
    const subkey = Object.keys(req.response.headers).filter(k => /SUBSCRIPTION-USERINFO/i.test(k))[0];
    const userinfo = req.response.headers[subkey];
    const upload_k = Number(userinfo.match(/upload=(\d+)/)[1])/1048576;
    const download_k = Number(userinfo.match(/download=(\d+)/)[1])/1048576;
    const total_k = Number(userinfo.match(/total=(\d+)/)[1])/1048576;
    const expire_time = userinfo.match(/expire=(\d+)/)
    let expires = "无信息"
    if (expire_time) {
        expires = formatTime(Number(expire_time[1] * 1000));
    }
    var data = {};
    data.expires = expires;
    data.total = total_k / 1024;
    data.remain = (total_k - upload_k - download_k) / 1024;
    cache.write(CACHE_KEY_DATA, data);
    return data;
  } catch (error) {
      return null;
  }
}

function sinDeg(deg) {
  return Math.sin((deg * Math.PI) / 180);
}

function cosDeg(deg) {
  return Math.cos((deg * Math.PI) / 180);
}

function drawArc(ctr, rad, w, deg, fillColor, strokeColor, text, txtColor) {

  bgx = ctr.x - rad;
  bgy = ctr.y - rad;
  bgd = 2 * rad;
  bgr = new Rect(bgx, bgy, bgd, bgd);

  const canvas = new DrawContext();
  canvas.size = new Size(canvSize, canvSize);
  canvas.respectScreenScale = true;

  canvas.setFillColor(new Color('#1E1E1E'));
  canvas.fillRect(new Rect(0, 0, canvSize, canvSize))

  canvas.setFillColor(fillColor);
  canvas.setStrokeColor(strokeColor);
  canvas.setLineWidth(w);
  canvas.strokeEllipse(bgr);

  for (t = 0; t < deg; t++) {
    rect_x = ctr.x + rad * sinDeg(t) - w / 2;
    rect_y = ctr.y - rad * cosDeg(t) - w / 2;
    rect_r = new Rect(rect_x, rect_y, w, w);
    canvas.fillEllipse(rect_r);
  }
  // attempt to draw info text
  const canvTextRect = new Rect(
    0,
    100 - canvTextSize / 2,
    canvSize,
    canvTextSize
  );
  canvas.setTextAlignedCenter();
  canvas.setTextColor(txtColor);
  canvas.setFont(Font.boldSystemFont(canvTextSize));
  canvas.drawTextInRect(text, canvTextRect);


  return canvas.getImage()
}

function createWidget(){
  let listWidget = new ListWidget()
  listWidget.backgroundColor = new Color("#1E1E1E");

  let iconStack = listWidget.addStack();
  iconStack.layoutHorizontally();
  let bannerStack = iconStack.addStack();
  bannerStack.layoutVertically();
  let icon_image_stack = bannerStack.addImage(iconImage);
  icon_image_stack.imageSize = scaleImage(iconImage.size, 40);

  bannerStack.addSpacer(null);

  if (data == null)
  {
    bannerStack.addText(`网络错误`);
    return listWidget;
  }

  let item = bannerStack.addText(`${data.expires}后到期`)
  item.textColor = new Color('#E9B526')
	item.font = Font.systemFont(9);

  let batteryArc = drawArc(
    new Point(canvSize / 2, canvSize / 2),
    canvRadius,
    canvWidth,
    Math.floor((data.remain / data.total) * 100 * 3.6),
    battCircleRemainColor,
    battCircleDepletedColor,
    Math.floor((data.remain / data.total) * 100) + '%',
    battCircleTextColor
  );

  iconStack.addSpacer(null);
  let arcImage = iconStack.addImage(batteryArc);

  listWidget.addSpacer(null);

  var today = new Date();
  var nextReset = new Date();
  nextReset.setDate(reset_day);
  if (today.getDate() > reset_day)
    nextReset = new Date(nextReset.setMonth(nextReset.getMonth() + 1));
  
  var diffDays = Math.round(Math.abs((today - nextReset) / 86400000));


  let flowStack = listWidget.addStack();
  flowStack.layoutHorizontally();

  let remainStack = flowStack.addStack();
  remainStack.layoutVertically();
  item = remainStack.addText(`${(data.remain).toFixed(2)}G`);
  item.textColor = new Color('#3E9BF7');
	item.font = Font.boldSystemFont(14);

  item = remainStack.addText(`剩余`);
  item.textColor = new Color('#9D9D9D')
	item.font = Font.systemFont(10);

  flowStack.addSpacer(null)

  let useStack = flowStack.addStack();
  useStack.layoutVertically();
  item = useStack.addText(`${(data.total - data.remain).toFixed(2)}G`);
  item.textColor = new Color('#FFFFFF');
	item.font = Font.boldSystemFont(14);

  item = useStack.addText(`已用`);
  item.textColor = new Color('#9D9D9D')
	item.font = Font.systemFont(10);

  item = listWidget.addSpacer(null)

  if (diffDays == 0)
    item = listWidget.addText(`今天是您的流量重置日`)
  else
    item = listWidget.addText(`流量自动重置还有${diffDays}天`)
  item.textColor = new Color('#9D9D9D');
	item.font = Font.systemFont(10);

  item = listWidget.addText(`到期预计使用${((data.total - data.remain) / (30 - diffDays) * 30).toFixed(0)}\%`)
  item.textColor = new Color('#9D9D9D');
	item.font = Font.systemFont(10);

  listWidget.presentSmall()
	return listWidget
}

function scaleImage(imageSize, height) {
	scale = height / imageSize.height
	return new Size(scale * imageSize.width, height)
}

function formatTime(timestamp) {
  const dateStart = Date.parse(new Date());
  console.log(dateStart)
  console.log(timestamp)
  return Math.ceil((timestamp - dateStart) / (1000 * 60 * 60 * 24))+"天"
}