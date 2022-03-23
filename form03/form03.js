function KiemTra()
{
	var ht = f.HoTen.value;
	var e = f.Email.value;
	var dc = f.DiaChi.value;
	var l = f.Loai.value;
	var ch = f.CauHoi.value;
	
	if(ht == '')
	{
		alert('Họ tên không được bỏ trống!');
		return false;
	}
	
	if(e == '')
	{
		alert('Email không được bỏ trống!');
		return false;
	}
	
	if(dc == '')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
	
	if(l == '')
	{
		alert('Loại không được bỏ trống!');
		return false;
	}
	
	if(ch == '')
	{
		alert('Câu hỏi không được bỏ trống!');
		return false;
	}
	
	return true;
	
}